"""Face detection + embedding. Used by both compare.py and main.py.

Lives in face-service/ next to EdgeFace's backbones/ and face_alignment/ folders.
"""
from pathlib import Path

import torch
import torch.nn.functional as F
from PIL import Image, ImageOps
from torchvision import transforms

from backbones import get_model
# We import mtcnn directly instead of face_alignment/align.py,
# because align.py is hardcoded to an NVIDIA GPU and crashes on a Mac.
from face_alignment import mtcnn

MODEL_NAME = "edgeface_s_gamma_05"
MAX_SIDE = 1600  # shrink big phone photos so detection stays fast on CPU

_here = Path(__file__).parent

# Loaded once, when this file is first imported.
_detector = mtcnn.MTCNN(device="cpu", crop_size=(112, 112))
_model = get_model(MODEL_NAME)
_model.load_state_dict(
    torch.load(_here / "checkpoints" / f"{MODEL_NAME}.pt", map_location="cpu")
)
_model.eval()

_to_tensor = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.5, 0.5, 0.5]),
])


def get_embeddings(image: Image.Image) -> list[list[float]]:
    """Return one embedding (512 numbers) per face found in the image.

    Returns an empty list if no face is found.
    """
    image = ImageOps.exif_transpose(image).convert("RGB")  # fix rotated phone photos
    image.thumbnail((MAX_SIDE, MAX_SIDE))

    _, faces = _detector.align_multi(image)  # list of 112x112 aligned face crops
    if len(faces) == 0:
        return []

    batch = torch.stack([_to_tensor(face) for face in faces])
    with torch.no_grad():
        embeddings = _model(batch)
    # Length 1, so that a dot product between two embeddings = cosine similarity.
    embeddings = F.normalize(embeddings, dim=1)
    return embeddings.tolist()

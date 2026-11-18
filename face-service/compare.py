"""Step 1: check that the model can tell people apart on YOUR photos.

Put some photos into face-service/photos/ and run:  python compare.py
"""
from pathlib import Path

import numpy as np
from PIL import Image

from faces import get_embeddings

PHOTOS = Path(__file__).parent / "photos"
EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

labels, vectors = [], []
for path in sorted(PHOTOS.iterdir()):
    if path.suffix.lower() not in EXTENSIONS:
        continue
    embeddings = get_embeddings(Image.open(path))
    print(f"{path.name}: {len(embeddings)} face(s)")
    for i, embedding in enumerate(embeddings):
        labels.append(path.name if len(embeddings) == 1 else f"{path.name}#{i + 1}")
        vectors.append(embedding)

if len(vectors) < 2:
    raise SystemExit("Need at least 2 detected faces to compare.")

vectors = np.array(vectors)
similarity = vectors @ vectors.T  # cosine similarity of every pair

pairs = [
    (similarity[i, j], labels[i], labels[j])
    for i in range(len(labels))
    for j in range(i + 1, len(labels))
]
print("\nAll pairs, most similar first:")
for score, a, b in sorted(pairs, reverse=True):
    print(f"  {score:5.2f}  {a}  <->  {b}")

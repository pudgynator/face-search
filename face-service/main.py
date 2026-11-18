"""Step 2: the FastAPI service.  Run:  uvicorn main:app --reload"""
import io

from fastapi import FastAPI, HTTPException, UploadFile
from PIL import Image, UnidentifiedImageError

from faces import get_embeddings  # importing this loads the model once

app = FastAPI()


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/embed")
def embed(file: UploadFile):
    try:
        image = Image.open(io.BytesIO(file.file.read()))
    except UnidentifiedImageError:
        raise HTTPException(400, "That file is not an image")

    embeddings = get_embeddings(image)
    if not embeddings:
        raise HTTPException(422, "No face found")
    return {"faces": len(embeddings), "embeddings": embeddings}

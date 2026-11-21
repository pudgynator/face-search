# Face Search
 
A web app that stores a collection of photos of people and lets you upload a picture to find every photo in the collection that contains the same face.
 
> **Status:** in development. The face embedding service works; the database and the web app are next.
 
## How it works
 
1. Every photo added to the collection is scanned for faces.
2. Each face is turned into an *embedding*: a list of 512 numbers that describes it.
3. When you upload a photo to search, its face is embedded the same way.
4. The app compares that embedding with the stored ones and returns the photos whose faces are similar enough.
Two photos of the same person produce embeddings with a high cosine similarity (about 0.6–0.8 in early tests), while different people score close to 0. The current working threshold is 0.4.
 
## Tech stack
 
| Part | Technology |
| --- | --- |
| Face detection | MTCNN |
| Face embeddings | [EdgeFace](https://github.com/otroshi/edgeface) (`edgeface_s_gamma_05`), PyTorch |
| Face service | Python, FastAPI |
| Web app (planned) | Next.js, React, TypeScript |
| Database (planned) | PostgreSQL with pgvector |
 
## Project structure
 
```
face-search/
  face-service/     Python service: detects faces and computes embeddings
    faces.py        model loading and the get_embeddings() function
    main.py         FastAPI app
    compare.py      script for testing the model on your own photos
    photos/         local test photos (not committed)
  web/              Next.js app (planned)
```
 
## Running the face service
 
Requires a recent version of Python 3.
 
```bash
cd face-service
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```
 
The service runs at `http://localhost:8000`. Interactive API docs are at `http://localhost:8000/docs`.
 
### API
 
| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/health` | Returns `{"status": "ok"}` |
| `POST` | `/embed` | Takes an image file, returns one embedding per face found |
 
Example response from `POST /embed`:
 
```json
{
  "faces": 2,
  "embeddings": [[0.034, -0.046, ...], [0.012, 0.087, ...]]
}
```
 
It returns `422` if no face is found and `400` if the file is not an image.
 
### Testing the model on your own photos
 
Put some photos in `face-service/photos/`, including several of the same person, then run:
 
```bash
python compare.py
```
 
The script prints every pair of faces with its similarity score, most similar first.
 
## Roadmap
 
- [x] Face detection and embedding
- [x] FastAPI service
- [ ] PostgreSQL + pgvector storage and similarity search
- [ ] Next.js app: add photos to the collection
- [ ] Next.js app: search by uploaded photo
- [ ] UI design
## Privacy
 
Face embeddings are biometric data. Only add photos of people who have agreed to it, and do not commit photos to this repository.
 
## Credits and license
 
Face recognition uses [EdgeFace](https://github.com/otroshi/edgeface) by the Idiap Research Institute. Its code is under the BSD 3-Clause license, and its pretrained model weights are under CC BY-NC-SA 4.0, so this project is for **non-commercial use only**. Face alignment code is from [AdaFace](https://github.com/mk-minchul/AdaFace) (MIT license).
 
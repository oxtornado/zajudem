from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from compare import verificar_rostro
import shutil

app = FastAPI()

# Permitir acceso desde tu frontend Vite
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Cambia si tu Vite corre en otro puerto
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/verificar")
async def verificar(file: UploadFile = File(...)):
    # Guardar la imagen temporalmente
    with open("captura_temp.jpg", "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Comparar rostros
    acceso = verificar_rostro("captura_temp.jpg")
    return { "acceso": acceso }

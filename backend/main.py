from fastapi import FastAPI, UploadFile, File, Form
from typing import List
import os  # para verificar si existe la imagen base
from fastapi.middleware.cors import CORSMiddleware
from compare import verificar_rostro  # importa tu función de verificación

app = FastAPI()

# CORS (si usas frontend separado)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Prueba manual en main.py
@app.get("/test-verificacion/")
def test():
    return {"resultado": verificar_rostro("captura_temp.jpg", "imagenes_base/112345689.jpeg")}


@app.post("/register-face/")
async def register_face(
    images: List[UploadFile] = File(...),
    document_id: str = Form(...)
):
    print("ID recibido:", document_id)
    path_img_base = f"images/{document_id}.jpeg"

    if not os.path.exists(path_img_base):
        print("Imagen base no existe:", path_img_base)
        return {"status": "error", "message": "Documento no registrado"}

    contents = await images[0].read()
    with open("captura_temp.jpg", "wb") as f:
        f.write(contents)

    print("Imagen capturada guardada. Procediendo a comparación.")
    result = verificar_rostro("captura_temp.jpg", path_img_base)
    
    # Convertir a bool nativo
    return {"status": "ok", "acceso": bool(result)}



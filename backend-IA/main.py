from fastapi import FastAPI, File, UploadFile, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware #evitar problemas de CORS
from typing import List
import requests
#--------------------------------(se remplazara una vez se vincule la bd)
import json # para guardar los datos localmente 
import os

app = FastAPI()

# aplicando la configuracion de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# credenciales necesarias para manipular face++
API_KEY = "yi4Dn_MR-Xx-xNaMCRli9XOIgWl8KnZP"
API_SECRET = "tyxWMjsNMPKpycsFuu-BkJU-aJj-9ja7"
FACE_DETECT_URL = "https://api-us.faceplusplus.com/facepp/v3/detect" # endpoint de face ++ para dectar un rostro 
FACE_COMPARE_URL = "https://api-us.faceplusplus.com/facepp/v3/compare" # endpoint de face ++ para comparar un rostro

# funcion para guardar los usuarios en un archivo .JSON(se usara temporalmente)
def save_users(data: dict):
    path = "usuarios_face.json"
    
    if os.path.exists(path):
        with open(path, "r") as f:
            usuarios = json.load(f)
    else:
        usuarios = {}

    email = data["email"]
    usuarios[email] = {
        "username": data["username"],
        "email": email,
        "rol": data["rol"],
        "telefono": data["telefono"],
        "contrasena": data["contrasena"],  # actualmente no hasheada 
        "face_token": data["face_token"]
    }

    with open(path, "w") as f:
        json.dump(usuarios, f, indent=4)

# Obtener token guardado por email
def get_face_token_by_email(email: str) -> str:
    path = "usuarios_face.json"
    if not os.path.exists(path):
        return None
    with open(path, "r") as f:
        usuarios = json.load(f)
    usuario = usuarios.get(email)
    return usuario["face_token"] if usuario else None

# Almacenamiento temporal de face_token por usuario
# ser_tokens = {}

# endpoint que registra a el usuario
@app.post("/register-face/")
async def register_face(
    username: str = Form(...),
    email: str = Form(...),
    rol: str = Form(...),
    telefono: str = Form(...),
    password: str = Form(...),
    images: List[UploadFile] = File(...)
):
    best_token = None
    best_confidence = 0

    for image in images:

        contents = await image.read()
        print(f"Foto recibida: {image.filename}, tamaño: {len(contents)} bytes")
        image.file.seek(0)  # Volver al inicio para que Face++ lea el contenido
        
        files = {"image_file": (image.filename, image.file, image.content_type)}
        data = {"api_key": API_KEY, "api_secret": API_SECRET}
        response = requests.post(FACE_DETECT_URL, files=files, data=data)
        result = response.json()

        if result.get("faces"):
            face_token = result["faces"][0]["face_token"]
            # En esta etapa podrías usar más lógica para decidir "el mejor" rostro
            best_token = face_token
            break  # por ahora nos quedamos con el primero válido

    if best_token:
        data_usuario = {
            "username": username,
            "email": email,
            "rol": rol,
            "telefono": telefono,
            "contrasena": password,
            "face_token": best_token
        }
        save_users(data_usuario)
        return {"message": "Registro facial exitoso", "face_token": best_token}
    else:
        return {"error": "No se detectó ningún rostro válido"}

# endpoint que hace la comparacion e inicia sesion si(80%)
@app.post("/login-face/")
async def login_face(
    email: str = Form(...),
    image: UploadFile = File(...)
):
    # Obtener el face_token registrado
    stored_token = get_face_token_by_email(email)
    if not stored_token:
        raise HTTPException(status_code=404, detail="Usuario no encontrado o sin registro facial")

    # Detectar face_token del rostro actual
    contents = await image.read()
    image.file.seek(0)
    files = {"image_file": (image.filename, image.file, image.content_type)}
    data = {"api_key": API_KEY, "api_secret": API_SECRET}
    detect_resp = requests.post(FACE_DETECT_URL, files=files, data=data)
    detect_data = detect_resp.json()

    if not detect_data.get("faces"):
        raise HTTPException(status_code=400, detail="No se detectó ningún rostro en la imagen enviada")

    login_face_token = detect_data["faces"][0]["face_token"]

    # Comparar tokens
    compare_data = {
        "api_key": API_KEY,
        "api_secret": API_SECRET,
        "face_token1": stored_token,
        "face_token2": login_face_token
    }

    compare_resp = requests.post(FACE_COMPARE_URL, data=compare_data)
    compare_result = compare_resp.json()

    confidence = compare_result.get("confidence", 0)

    if confidence > 80:
        return {"message": "Inicio de sesión facial exitoso", "confidence": confidence}
    else:
        return {"error": "Rostro no coincide", "confidence": confidence}
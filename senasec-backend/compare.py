from deepface import DeepFace

def verificar_rostro(imagen_captura, imagen_registrada="images/daniel-duarte.jpeg"):
    try:
        resultado = DeepFace.verify(
            img1_path=imagen_captura,
            img2_path=imagen_registrada,
            model_name="Facenet512",
            enforce_detection=True
        )
        if resultado["verified"]:
            
            return True
        else:
            return False
    except Exception as e:
        print("❌ Error al verificar rostro:", e)
        return False

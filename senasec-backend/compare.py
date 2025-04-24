from deepface import DeepFace
import face_recognition 

def verificar_rostro(captura_path, base_path):
    print("Comparando:", captura_path, base_path)
    # cargar imagen, detectar rostros, etc.
    # por ejemplo, si usas face_recognition:
    captura = face_recognition.load_image_file(captura_path)
    base = face_recognition.load_image_file(base_path)

    try:
        captura_enc = face_recognition.face_encodings(captura)[0]
        base_enc = face_recognition.face_encodings(base)[0]
        result = face_recognition.compare_faces([base_enc], captura_enc)[0]
        print("¿Coincide el rostro?:", result)
        return result
    except IndexError:
        print("No se detectó rostro en una de las imágenes")
        return False


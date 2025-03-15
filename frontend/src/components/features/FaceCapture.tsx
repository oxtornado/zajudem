import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam'; // libreria para usar la camara
import axios from 'axios'; // conectar contenido con el backend

type FaceCaptureProps = {
    id: string;
  };

  const FaceCapture: React.FC<FaceCaptureProps> = ({ id }) => {
    const webcamRef = useRef<Webcam>(null); // referencia para tomar capturas
    const [capturing, setCapturing] = useState(false);
    const [status, setStatus] = useState(''); // muestra msj del proceso, fotos en backend, tomando fotos...

    const captureAndVerify = async () => {
        setCapturing(true);
        setStatus('Capturando rostro...');
    
        const imageSrc = webcamRef.current?.getScreenshot();
    
        if (!imageSrc) {
            setStatus('No se pudo capturar imagen');
            setCapturing(false);
            return;
        }
    
        const blob = await fetch(imageSrc).then((res) => res.blob());
    
        setStatus('Enviando imagen para verificación...');
    
        try {
            const formData = new FormData();
            formData.append('document_id', id); 
            formData.append('images', blob, 'captura_temp.jpg'); // ✅ esto sí lo espera tu backend
    
            const response = await axios.post(
                'http://localhost:8000/register-face/', // URL de tu API FastAPI
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );
    
            if (response.data.acceso) {
                setStatus('✅ Acceso permitido');
            } else {
                setStatus('⛔ Acceso denegado');
            }
        } catch (error) {
            console.error('Error en la verificación:', error);
            setStatus('❌ Error al verificar rostro');
        }
    
        setCapturing(false);
    };
    
    return (
        <div className="flex flex-col items-center space-y-4">
            <button
                onClick={captureAndVerify}
                disabled={capturing}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {capturing ? 'Capturando...' : 'Iniciar captura facial'}
            </button>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={400}
                videoConstraints={{
                    facingMode: 'user',
                }}
                className="rounded shadow"
            />
            {status && <p className="text-sm text-gray-600">{status}</p>}
        </div>
    );
};

export default FaceCapture;

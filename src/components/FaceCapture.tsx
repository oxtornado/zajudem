import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam'; // libreria para usar la camara
import axios from 'axios'; // conectar contenido con el backend

const FaceCapture: React.FC = () => {
    const webcamRef = useRef<Webcam>(null); // referencia para tomar capturas
    const [capturing, setCapturing] = useState(false);
    const [status, setStatus] = useState(''); // muestra msj del proceso, fotos en backend, tomando fotos...

    const captureMultiplePhotos = async () => {
        setCapturing(true); // inicio de captura
        setStatus('Capturando fotos...');

        const photos: Blob[] = [];
        // captura 5 fotos
        for (let i = 0; i < 5; i++) {
            const imageSrc = webcamRef.current?.getScreenshot();
            if (imageSrc) {
                const blob = await fetch(imageSrc).then((res) => res.blob());
                photos.push(blob);
            }
            await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 segundo
        }

        setStatus('Enviando al backend...');

        try {
            const formData = new FormData();
            photos.forEach((photo, index) => {
                formData.append('images', photo, `face_${index}.jpg`);
            });

            const response = await axios.post(
                'http://localhost:8000/register-face/',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            );

            console.log('Respuesta del backend:', response.data);
            setStatus('Captura y envío exitoso');
        } catch (error) {
            console.error('Error enviando al backend:', error);
            setStatus('Error al enviar imágenes');
        }

        setCapturing(false); // fin captura
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <button
                onClick={captureMultiplePhotos}
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

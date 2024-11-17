import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Camera, Download } from 'lucide-react';

const VirtualTryOn = () => {
  const webcamRef = useRef<Webcam>(null);
  const [selectedFrame, setSelectedFrame] = useState<string | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const frames = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      name: 'Modelo Clásico'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      name: 'Modelo Sport'
    }
  ];

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Prueba Virtual de Monturas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          {capturedImage ? (
            <img
              src={capturedImage}
              alt="Captured"
              className="w-full rounded-lg"
            />
          ) : (
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full rounded-lg"
            />
          )}
          
          {selectedFrame && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
              <img
                src={selectedFrame}
                alt="Selected frame"
                className="w-full opacity-70"
              />
            </div>
          )}
          
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={capture}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Camera className="w-5 h-5 mr-2" />
              Capturar
            </button>
            {capturedImage && (
              <button
                onClick={() => setCapturedImage(null)}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Reintentar
              </button>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Selecciona una montura</h3>
          <div className="grid grid-cols-2 gap-4">
            {frames.map((frame) => (
              <div
                key={frame.id}
                onClick={() => setSelectedFrame(frame.image)}
                className={`cursor-pointer p-2 border rounded-lg ${
                  selectedFrame === frame.image ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <img
                  src={frame.image}
                  alt={frame.name}
                  className="w-full rounded-lg"
                />
                <p className="mt-2 text-center text-sm">{frame.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;
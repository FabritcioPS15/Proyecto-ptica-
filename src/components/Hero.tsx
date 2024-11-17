import React from 'react';
import { Eye } from 'lucide-react';

const Hero = () => {
  return (
    <div id="inicio" className="pt-16">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556015048-4d3aa10df74c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Optical store"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <Eye className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Tu visión es nuestra prioridad
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
              Descubre nuestra colección de lentes de alta calidad y servicios profesionales de optometría
            </p>
            <div className="mt-10">
              <a
                href="#contacto"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Agenda tu cita
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
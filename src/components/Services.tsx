import React from 'react';
import { Eye, Glasses, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: 'Examen Visual Completo',
      description: 'Evaluación profesional de tu salud visual con tecnología avanzada'
    },
    {
      icon: <Glasses className="h-8 w-8 text-blue-600" />,
      title: 'Adaptación de Lentes',
      description: 'Ajuste personalizado de tus lentes para máxima comodidad'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Garantía de Calidad',
      description: 'Todos nuestros productos cuentan con garantía de satisfacción'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Servicio Rápido',
      description: 'Entrega de lentes en tiempo récord sin comprometer la calidad'
    }
  ];

  return (
    <div id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Ofrecemos servicios profesionales para el cuidado de tu salud visual
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
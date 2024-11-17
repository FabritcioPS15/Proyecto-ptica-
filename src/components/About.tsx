import React from 'react';

const About = () => {
  return (
    <div id="nosotros" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sobre Nosotros
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Con más de 8 años de experiencia, somos líderes en el cuidado de la salud visual. 
              Nuestro equipo de profesionales altamente capacitados está comprometido con 
              proporcionar la mejor atención y soluciones visuales personalizadas para cada cliente.
            </p>
            <div className="mt-8">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                <div className="border-t-2 border-gray-200 pt-4">
                  <dt className="text-3xl font-bold text-blue-600">20+</dt>
                  <dd className="mt-1 text-gray-600">Años de experiencia</dd>
                </div>
                <div className="border-t-2 border-gray-200 pt-4">
                  <dt className="text-3xl font-bold text-blue-600">5000+</dt>
                  <dd className="mt-1 text-gray-600">Clientes satisfechos</dd>
                </div>
                <div className="border-t-2 border-gray-200 pt-4">
                  <dt className="text-3xl font-bold text-blue-600">100%</dt>
                  <dd className="mt-1 text-gray-600">Garantía de calidad</dd>
                </div>
                <div className="border-t-2 border-gray-200 pt-4">
                  <dt className="text-3xl font-bold text-blue-600">24/7</dt>
                  <dd className="mt-1 text-gray-600">Soporte al cliente</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-10 lg:mt-0"> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
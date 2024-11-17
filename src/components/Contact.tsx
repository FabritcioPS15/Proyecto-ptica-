import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contacto" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Estamos aquí para ayudarte
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombres y Apellidos
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="Ej: Juan Pérez"
                />
              </div>
              <div>
                <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
                  DNI
                </label>
                <input
                  type="text"
                  id="dni"
                  maxLength={8}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="12345678"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +51
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    maxLength={9}
                    className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                    placeholder="987654321"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="ejemplo@correo.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-8">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Teléfono</h3>
                  <p className="mt-1 text-gray-600">+51 987 654 321</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">contacto@opticavision.pe</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Dirección</h3>
                  <p className="mt-1 text-gray-600">
                    Optica 209, Jr. Huancavelica 470<br />
                    Lima 15001, Perú
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <iframe
                  title="Ubicación de la óptica"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.964557641776!2d-77.03847!3d-12.043889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c6b6a7a92f%3A0x6c3a73a8c31b6e31!2sJr.%20Huancavelica%20470%2C%20Lima%2015001!5e0!3m2!1ses!2spe!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  className="rounded-lg shadow-md"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
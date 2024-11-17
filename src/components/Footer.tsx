import React from 'react';
import { Glasses, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Glasses className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">ÓpticaVision</span>
            </div>
            <p className="mt-4 text-gray-400">
              Tu visión es nuestra prioridad. Confía en nuestros profesionales para el cuidado de tus ojos.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white">Servicios</a></li>
              <li><a href="#productos" className="text-gray-400 hover:text-white">Productos</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-white">Nosotros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Horario</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes: 9:00 - 20:00</li>
              <li>Sábado: 10:00 - 14:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} ÓpticaVision. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Products = () => {
  const allProducts = [
    {
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      name: "Lentes de Sol Ray-Ban",
      description: "Protección UV400 con estilo clásico",
      category: "sol"
    },
    {
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      name: "Monturas Modernas",
      description: "Diseños ligeros y resistentes",
      category: "cerca"
    },
    {
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      name: "Lentes de Contacto",
      description: "Variedad de opciones y colores",
      category: "contacto"
    },
    {
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      name: "Lentes con Protección Luz Azul",
      description: "Ideal para trabajo en computadora",
      category: "azul"
    },
    {
      image: "https://images.unsplash.com/photo-1546180245-c59500ad14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      name: "Lentes de Lectura",
      description: "Comfort y claridad para lectura",
      category: "cerca"
    },
    {
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      name: "Lentes Deportivos",
      description: "Resistentes al impacto y antideslizantes",
      category: "sol"
    },
    {
      image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      name: "Lentes Progresivos",
      description: "Visión clara a todas las distancias",
      category: "lejos"
    },
    {
      image: "https://images.unsplash.com/photo-1604785846291-944966cb5209?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      name: "Lentes para Computadora",
      description: "Reduce la fatiga visual digital",
      category: "azul"
    },
    {
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      name: "Lentes de Alta Miopía",
      description: "Lentes ultradelgados para alta graduación",
      category: "lejos"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = allProducts.filter(product => 
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      product.description.toLowerCase().includes(term.toLowerCase()) ||
      product.category.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const categories = [
    { name: 'sol', label: 'Lentes de Sol' },
    { name: 'cerca', label: 'Lentes de Cerca' },
    { name: 'lejos', label: 'Lentes de Lejos' },
    { name: 'azul', label: 'Protección Luz Azul' },
    { name: 'contacto', label: 'Lentes de Contacto' }
  ];

  return (
    <div id="productos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Productos
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Descubre nuestra amplia selección de productos ópticos
          </p>
        </div>

        <div className="mt-8">
          <div className="relative max-w-xl mx-auto">
            <div className="flex items-center border-2 border-gray-300 rounded-lg p-2">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="ml-2 w-full focus:outline-none"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleSearch(category.name)}
                  className="px-4 py-2 rounded-full text-sm bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200"
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="group relative transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-base text-gray-600">{product.description}</p>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
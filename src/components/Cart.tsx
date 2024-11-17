import React from 'react';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Cart = () => {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  const handleCheckout = async () => {
    // Aquí iría la integración con la pasarela de pagos
    console.log('Procesando pago...');
  };

  return (
    <div className="fixed right-0 top-0 h-screen w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Carrito</h2>
          <ShoppingCart className="h-6 w-6" />
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">El carrito está vacío</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">S/. {item.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="p-1 rounded-full hover:bg-gray-200"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-gray-200"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>S/. {total().toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Proceder al pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
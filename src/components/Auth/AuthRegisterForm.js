import React, { useState } from 'react';

const AuthRegisterForm = () => {
  const [userType, setUserType] = useState('client');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    document: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Regístrate</h2>
      <div className="flex space-x-4 mb-4">
        <button 
          onClick={() => setUserType('client')}
          className={`px-4 py-2 rounded-lg ${userType === 'client' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Cliente
        </button>
        <button 
          onClick={() => setUserType('provider')}
          className={`px-4 py-2 rounded-lg ${userType === 'provider' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Proveedor
        </button>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {userType === 'provider' && (
          <input
            type="text"
            name="document"
            placeholder="Documento de identidad"
            value={formData.document}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        )}
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default AuthRegisterForm;

// DONE
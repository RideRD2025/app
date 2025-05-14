import { useState } from 'react';
import AuthRegisterForm from './components/Auth/AuthRegisterForm';
import VehicleCategoryCard from './components/Vehicle/VehicleCategoryCard';
import ChatBotMessage from './components/Chat/ChatBotMessage';
import PaymentMethodCard from './components/Payment/PaymentMethodCard';
import ReviewStars from './components/Review/ReviewStars';
import ProviderCalendar from './components/Provider/ProviderCalendar';
import LanguageSwitcher from './components/Language/LanguageSwitcher';

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  const vehicleCategories = [
    { category: 'Autos', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70', count: 24 },
    { category: 'Yates', image: 'https://images.unsplash.com/photo-1518544866335-95dd2660e8d3', count: 8 },
    { category: 'Jet Skis', image: 'https://images.unsplash.com/photo-1591703291603-2150887a3d5e', count: 15 },
    { category: 'Avionetas', image: 'https://images.unsplash.com/photo-1528123778682-0a1530167d6b', count: 3 },
    { category: 'Parapentes', image: 'https://images.unsplash.com/photo-1528164344705-47542687000d', count: 5 },
    { category: 'Buggies', image: 'https://images.unsplash.com/photo-1593941707882-a91b5a1d1a1f', count: 12 },
    { category: 'Can-Am', image: 'https://images.unsplash.com/photo-1622180203374-9524e54d6c4a', count: 7 }
  ];

  const bookings = [
    { date: '2023-11-15' },
    { date: '2023-11-20' },
    { date: '2023-11-25' }
  ];

  const renderView = () => {
    switch(currentView) {
      case 'register':
        return <AuthRegisterForm />;
      case 'categories':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {vehicleCategories.map((cat, index) => (
              <VehicleCategoryCard 
                key={index}
                category={cat.category}
                image={cat.image}
                count={cat.count}
                onSelect={() => setCurrentView('details')}
              />
            ))}
          </div>
        );
      case 'chat':
        return (
          <div className="max-w-md mx-auto p-4">
            <ChatBotMessage message="¡Hola! ¿En qué puedo ayudarte hoy?" isUser={false} />
            <ChatBotMessage message="Quiero alquilar un yate para el fin de semana" isUser={true} />
          </div>
        );
      case 'payment':
        return (
          <div className="max-w-md mx-auto p-6 space-y-4">
            <PaymentMethodCard 
              method="Tarjeta de crédito" 
              icon="💳" 
              selected={true} 
              onSelect={() => {}} 
            />
            <PaymentMethodCard 
              method="PayPal" 
              icon="🔵" 
              selected={false} 
              onSelect={() => {}} 
            />
            <PaymentMethodCard 
              method="Efectivo" 
              icon="💵" 
              selected={false} 
              onSelect={() => {}} 
            />
          </div>
        );
      case 'reviews':
        return (
          <div className="max-w-md mx-auto p-6">
            <div className="flex items-center space-x-2 mb-2">
              <ReviewStars rating={4} />
              <span className="text-gray-600">4/5</span>
            </div>
          </div>
        );
      case 'calendar':
        return (
          <div className="max-w-md mx-auto p-4">
            <ProviderCalendar bookings={bookings} />
          </div>
        );
      default:
        return (
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-6">Bienvenido a RideRD</h1>
            <div className="flex justify-center space-x-4 mb-8">
              <button 
                onClick={() => setCurrentView('register')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Registrarse
              </button>
              <button 
                onClick={() => setCurrentView('categories')}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Explorar
              </button>
            </div>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderView()}
    </div>
  );
};

export default App;

// DONE
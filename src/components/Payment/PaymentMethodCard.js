const PaymentMethodCard = ({ method, icon, selected, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(method)}
      className={`p-4 border rounded-lg cursor-pointer transition-colors ${selected ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
    >
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{icon}</div>
        <span className="font-medium">{method}</span>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
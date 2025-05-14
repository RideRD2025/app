const VehicleCategoryCard = ({ category, image, count, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(category)}
      className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
    >
      <img 
        src={image} 
        alt={category}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-xl font-bold">{category}</h3>
        <p className="text-sm">{count} disponibles</p>
      </div>
    </div>
  );
};

export default VehicleCategoryCard;
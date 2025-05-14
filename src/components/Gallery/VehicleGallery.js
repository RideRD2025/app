import React, { useState } from 'react';

const VehicleGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoom, setZoom] = useState(false);

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
    setZoom(false);
  };

  const toggleZoom = () => {
    setZoom(!zoom);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div 
        className={`relative overflow-hidden rounded-xl bg-gray-100 ${zoom ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
        onClick={toggleZoom}
      >
        <img
          src={images[selectedImage]}
          alt={`Vehicle ${selectedImage + 1}`}
          className={`w-full h-96 object-cover transition-transform duration-300 ${zoom ? 'scale-150' : 'scale-100'}`}
        />
        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
          {selectedImage + 1}/{images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative overflow-hidden rounded-lg h-20 ${selectedImage === index ? 'ring-2 ring-blue-500' : ''}`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleGallery;
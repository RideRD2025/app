import React from 'react';
import VehicleGallery from './VehicleGallery';

export default {
  title: 'Components/Gallery/VehicleGallery',
  component: VehicleGallery,
};

const Template = (args) => <VehicleGallery {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d',
    'https://images.unsplash.com/photo-1494972308805-463bc619d34e',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a'
  ]
};

// DONE
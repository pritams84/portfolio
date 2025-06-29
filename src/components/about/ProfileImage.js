import React from 'react';
import Tilt from 'react-parallax-tilt';
import whatsappImage from '../../assets/whatsapp.jpg';

const ProfileImage = () => (
  <Tilt
depth={300}
scale={1.08}
perspective={900}
gyroscope={true}
className="w-80 h-80 flex items-center justify-center"
  >
    <img
      src={whatsappImage}
      alt="Pritam Singh"
      className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-blue-100"
      style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)' }}
    />
  </Tilt>
);

export default ProfileImage; 
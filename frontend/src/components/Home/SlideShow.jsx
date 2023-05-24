import React, { useEffect, useState } from 'react';

import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';

const SlideShow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const images = [
    { url: img1, text: 'img1' },
    { url: img2, text: 'img2' },
    { url: img3, text: 'img3' },
  ];

  return (
    <div className='border-8 rounded-3xl border-gray-700' style={{ position: 'relative', height: '100%' }}>
      {images.map((image, i) => (
        <img
          className='rounded-2xl'
          key={i}
          src={image.url}
          alt={image.text}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === i ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}
    </div>
  );
};

export default SlideShow;
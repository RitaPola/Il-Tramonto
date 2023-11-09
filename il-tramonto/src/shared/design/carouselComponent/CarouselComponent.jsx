import React, { useState, useEffect, useCallback } from 'react';
import esterno1 from '../../assets/img/esterno1.jpeg';
import esterno2 from '../../assets/img/esterno2.jpeg';
import esterno3 from '../../assets/img/esterno3.jpeg';
import esterno4 from '../../assets/img/esterno4.jpeg';
import { motion, AnimatePresence } from 'framer-motion';

const images = [esterno1, esterno2, esterno3, esterno4];

const CarouselComponent = ({ icon, icon2 }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

 /* const autoPlay = useCallback(() => {
    nextImage();
  }, []);

  useEffect(() => {
    let intervalId;

    const startAutoPlay = () => {
      intervalId = setInterval(() => {
        autoPlay();
      }, 3000);
    };

    startAutoPlay();

    return () => {
      clearInterval(intervalId);
    };
  }, [autoPlay]);*/

  return (
    <div className="carousel">
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -0, opacity: 1 }}
        />
      </AnimatePresence>
      <div className="button-container">
        <button onClick={prevImage} className="prev-button">
          <i className={'fa fa-' + icon} />
        </button>
        <button onClick={nextImage} className="next-button">
          <i className={'fa fa-' + icon2} />
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;

import React, { useState, useEffect } from 'react';
import esterno1 from '../../assets/img/esterno1.jpeg';
import esterno2 from '../../assets/img/esterno2.jpeg';
import esterno3 from '../../assets/img/esterno3.jpeg';
import esterno4 from '../../assets/img/esterno4.jpeg';

const CarouselComponent = ({ icon, icon2 }) => {
    const images = [
      esterno1,
      esterno2,
      esterno3,
      esterno4,
    ];
  
    const [currentImage, setCurrentImage] = useState(0);
  
    const nextImage = () => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
  
    const prevImage = () => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
  
    // Funzione per passare automaticamente all'immagine successiva
    const autoPlay = () => {
      nextImage();
    };
  
    useEffect(() => {
      // Imposta un intervallo per chiamare autoPlay ogni 3 secondi (3000 millisecondi)
      const intervalId = setInterval(autoPlay, 5000);
  
      // Pulisce l'intervallo quando il componente viene smontato
      return () => {
        clearInterval(intervalId);
      };
    }, []);

  return (
    <div className="carousel">
    <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
    <div className="button-container">
        <button onClick={prevImage} className="prev-button"><i className={'fa fa-' + icon} style={{color: 'c8a2c8'}}/></button>
        <button onClick={nextImage} className="next-button"><i className={'fa fa-' + icon2} style={{color: 'c8a2c8'}}/></button>
    </div>
</div>

  );
};

export default CarouselComponent;
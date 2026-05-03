import { useState, useEffect, useRef } from 'react';
import './Slider.css';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const resetAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const goToNext = (isManual = false) => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    if (isManual) {
      resetAutoPlay();
    }
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetAutoPlay();
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const getPositionClass = (index) => {
    const length = images.length;
    let diff = index - currentIndex;

    if (diff < -1) diff += length;
    if (diff > 1) diff -= length;

    if (diff === 0) return 'slide-center';
    if (diff === 1) return 'slide-right-1';
    if (diff === -1) return 'slide-left-1';
    
    return 'slide-hidden';
  };

  return (
    <div className="slider-container">
      <button className="nav-arrow left-arrow" onClick={goToPrev}>
        &#10094;
      </button>

      <div className="slider-track">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`slide ${getPositionClass(index)}`}
            onClick={() => goToIndex(index)}
          >
            <img src={img} alt={`Tech Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="nav-arrow right-arrow" onClick={() => goToNext(true)}>
        &#10095;
      </button>

      <div className="dots-container">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;

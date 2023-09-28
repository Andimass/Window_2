import './First_Block.css';
import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

function First_Block() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = [
    '/public/house1.png',
    '/public/house2.jpg',
    '/public/house3.jpg',
    '/public/house4.jpg',
    '/public/house5.jpg',
  ];

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  // Анимация при клике на стрелки
  const arrowTransitions = useTransition(slideImages[currentSlide], {
    from: {  opacity: 1, transform: 'translateX(-100%)',},
    enter: { opacity: 1, transform: 'translateX(0%)' },
  });

  // Анимация по времени
  const autoTransitions = useTransition(slideImages[currentSlide], {
    from: {  opacity: 0 },
    enter: { opacity: 0 },
  });

  return (
    <first_block className='first_block'>
      <div className='container_block'>
        <h2 className='title'>Алюминевые системы</h2>
        <p className='text'>Наша компания специализируется на производстве и продаже высококачественных оконных систем, которые отличаются надежностью, энергоэффективностью и превосходным дизайном.</p>
        <p className='podrobnee'>Подробнее</p>
        <div className='center-point'></div>
        <div className='slaider'>
          <div className='slaider_image'>
            <img src="/public/strela1.png" alt="Previous" onClick={prevSlide} />
          </div>
          <p>{currentSlide + 1}/{slideImages.length}</p>
          <div className='slaider_image'>
            <img src="/public/strela2.png" alt="Next" onClick={nextSlide} />
          </div>
          <p className='catalog'>Смотреть каталог</p>
        </div>
        {arrowTransitions((style, item) =>
          item && <animated.img className="image" src={item} alt="Slide" style={style} />
        )}

        {autoTransitions((style, item) =>
          item && <animated.img className="image" src={item} alt="Slide" style={style} />
        )}
      </div>
    </first_block>
  );
}

export default First_Block;

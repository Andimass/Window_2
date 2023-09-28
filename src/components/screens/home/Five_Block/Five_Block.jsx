import './Five_Block.css';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

function Five_Block() {
   const blockRef2 = useRef(null);

useEffect(() => {
  function handleScroll1() {
    const block = blockRef2.current;
    if (!block) return;

    const blockRect = block.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Вычисляем, сколько пикселей блок должен быть прокручен,
    // чтобы стать видимым (10% от его высоты)
    const revealThreshold = blockRect.height * 0.3;

    if (blockRect.top - windowHeight + revealThreshold < 0) {
      // Если блок виден на экране (прокручен на 10% от высоты),
      // добавляем класс, который изменяет его стили
      block.classList.add('revealeds');

      // Добавляем классы анимации ко всем блокам
      const object_1 = block.querySelector('.object_1');
      const object_2 = block.querySelector('.object_2');
      const object_3 = block.querySelector('.object_3');

      if (object_1) {
        object_1.classList.add('slideLeft');
      }

      if (object_2) {
        object_2.classList.add('slideRight');
      }

      if (object_3) {
        object_3.classList.add('slideUp');
      }
    }
  }

  window.addEventListener('scroll', handleScroll1);
  handleScroll1(); // Вызываем при загрузке страницы

  return () => {
    window.removeEventListener('scroll', handleScroll1);
  };
}, []);


  return (
    <div className='container_5' ref={blockRef2}>
      <p className='line_2'></p>
      <div className='title_container_5'>
        <h2 className='portfolio'>портфолио</h2>
        <p className='see_catalog'>Смотреть каталог</p>
      </div>
      <div className='object_1'>
        <p className='object_title_1'>Загородный дом</p>
        <p className='object_city_1'>краснодар</p>
        <p className='object_time_1'>15.08.2023</p>
        <img src='/public/object_1.png' alt='Object 1' />
      </div>
      <div className='object_2'>
        <p className='object_title_2'>Жк “Светлоград”</p>
        <p className='object_city_2'>краснодар</p>
        <p className='object_time_2'>15.08.2023</p>
        <img src='/public/object_2.png' alt='Object 2' />
      </div>
      <div className='object_3'>
        <p className='object_title_3'>Бц “олипик плаза”</p>
        <p className='object_city_3'>краснодар</p>
        <p className='object_time_3'>15.08.2023</p>
        <img src='/public/object_3.png' alt='Object 3' />
      </div>
    </div>
  );
}

export default Five_Block;
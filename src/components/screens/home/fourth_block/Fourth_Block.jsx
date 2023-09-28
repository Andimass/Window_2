import './Fourth_Block.css'
import React, { useEffect, useRef } from "react";

function Fourth_Block() {
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
      const line3Elements = document.querySelectorAll('.line_3');

      line3Elements.forEach((line) => {
        line.classList.add('fillLine');
      });

      const p1 = document.querySelectorAll('.p1');

      p1.forEach((p1) => {
        p1.classList.add('slideInFromLeft');
      });

      const p2 = document.querySelectorAll('.p2');

      p2.forEach((p2) => {
        p2.classList.add('slideInFromRight');
      });

      const p3 = document.querySelectorAll('.p3');

      p3.forEach((p3) => {
        p3.classList.add('slideInFromLeft');
      });

      const p4 = document.querySelectorAll('.p4');

      p4.forEach((p4) => {
        p4.classList.add('slideInFromRight');
      });

      const title_1 = document.querySelectorAll('.title_1');

      title_1.forEach((title_1) => {
        title_1.classList.add('imageDown');
      });

      const title_2 = document.querySelectorAll('.title_2');

      title_2.forEach((title_2) => {
        title_2.classList.add('imageDown');
      });

      const title_3 = document.querySelectorAll('.title_3');

      title_3.forEach((title_3) => {
        title_3.classList.add('imageUp');
      });

      const title_4 = document.querySelectorAll('.title_4');

      title_4.forEach((title_4) => {
        title_4.classList.add('imageUp');
      });

      const img1 = document.querySelectorAll('.img1');

      img1.forEach((img1) => {
        img1.classList.add('imageDown');
      });

      const img2 = document.querySelectorAll('.img2');

      img2.forEach((img2) => {
        img2.classList.add('imageDown');
      });

      const img3 = document.querySelectorAll('.img3');

      img3.forEach((img3) => {
        img3.classList.add('imageUp');
      });

      const img4 = document.querySelectorAll('.img4');

      img4.forEach((img4) => {
        img4.classList.add('imageUp');
      });
    }
   }

  window.addEventListener('scroll', handleScroll1);
  handleScroll1(); // Вызываем при загрузке страницы

  return () => {
    window.removeEventListener('scroll', handleScroll1);
  };
}, []);
  return (
    <div className='container_4' ref={blockRef2}>
      <div className='el_1'>
        <p className='line_3'></p>
        <h2 className='title_1'>Rebau Thermo</h2>
        <div className='text_1'>
          <p className='p1'>Количество воздушных камер: 3</p>
          <p className='p1'>Толщина стекла: 24 мм</p>
          <p className='p1'>Глубина системы: 30 мм</p>
        </div>
        <img className='img1' src='public/w1.png'/>
      </div>
      <div className='el_2'>
        <p className='line_3'></p>
        <h2 className='title_2'>Sealine wood</h2>
        <div className='text_2a'>
          <p className='p2'>Количество воздушных камер: 3</p>
          <p className='p2'>Толщина стекла: 24 мм</p>
          <p className='p2'>Глубина системы: 30 мм</p>
        </div>
        <img className='img2' src='public/w2.png'/>
      </div>
      <div className='el_3'>
        <p className='line_3'></p>
        <h2 className='title_3'>Hauph Nowic</h2>
        <div className='text_3'>
          <p className='p3'>Количество воздушных камер: 3</p>
          <p className='p3'>Толщина стекла: 24 мм</p>
          <p className='p3'>Глубина системы: 30 мм</p>
        </div>
        <img className='img3' src='public/w3.png'/>
      </div>
      <div className='el_4'>
        <p className='line_3'></p>
        <h2 className='title_4'>Porto glass</h2>
        <div className='text_4'>
          <p className='p4'>Количество воздушных камер: 3</p>
          <p className='p4'>Толщина стекла: 24 мм</p>
          <p className='p4'>Глубина системы: 30 мм</p>
        </div>
        <img className='img4' src='public/w4.png'/>
      </div>
    </div>
  )
}

export default Fourth_Block
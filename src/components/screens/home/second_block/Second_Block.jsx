import React, {useEffect, useRef} from 'react';
import './Second_Block.css';

function Second_Block() {
  const blockRef1 = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const block = blockRef1.current;
      if (!block) return;

      const blockRect = block.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Вычисляем, сколько пикселей блок должен быть прокручен,
      // чтобы стать видимым (10% от его высоты)
      const revealThreshold = blockRect.height * 0.6;

      if (blockRect.top - windowHeight + revealThreshold < 0) {
        // Если блок виден на экране (прокручен на 10% от высоты),
        // добавляем класс, который изменяет его стили
        block.classList.add('revealed');

      const imag1 = document.querySelectorAll('.imag1');

      imag1.forEach((imag1) => {
        imag1.classList.add('imageUp');
      });

      const imag2 = document.querySelectorAll('.imag2');

      imag2.forEach((imag2) => {
        imag2.classList.add('imageDown');
      });

      const charac = document.querySelectorAll('.charac');

      charac.forEach((charac) => {
        charac.classList.add('slideInFromLeft');
      });

      const charac2 = document.querySelectorAll('.charac2');

      charac2.forEach((charac2) => {
        charac2.classList.add('slideInFromRight');
      });






      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Вызываем при загрузке страницы

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
      <div className = "container_2" ref={blockRef1} >
        <p className='line_2'></p>
          <p className='text_2'>Мы работаем только с проверенными поставщиками материалов, чтобы гарантировать долговечность и безопасность наших продуктов</p>
        <div className="al">
          <div className='al_1'>
              <img className='imag1' src="/public/al_1.png"  alt=''/>
              <h2 className="al_title">alumil</h2>
              <div className="charac-container">
                    <p className='charac'>Низкая цена</p>
                    <p className='charac'>Легкая установка</p>
                    <p className='charac'>Долговечность</p>
                    <p className='charac'>Материалы <span className="charac-more">подробнее</span></p>
                </div>
           </div>
           <div className='al_2'>
               <img className='imag2' src="/public/al_2.png"  alt=''/>
               <h2 className="al_title">татпроф</h2>
               <div className="charac-container_2">
                    <p className='charac2'>Низкая цена</p>
                    <p className='charac2'>Легкая установка</p>
                    <p className='charac2'>Долговечность</p>
                    <p className='charac2'>Материалы <span className="charac-more2">подробнее</span></p>
                </div>

           </div>
         </div>
      </div>
  )
}

export default Second_Block
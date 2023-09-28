import React, { useEffect, useRef } from 'react';
import './Thirst_Block.css';

function Thirst_Block() {
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

        // Добавляем классы анимации к изображениям в зависимости от направления
        const textAndImage1 = block.querySelector('.text_and_image');
        const textAndImage2 = block.querySelector('.text_and_image_2');

        if (textAndImage1) {
          const images1 = textAndImage1.querySelectorAll('img');
          images1.forEach((img) => {
            img.classList.add('slideLeft');
          });
        }

        if (textAndImage2) {
          const images2 = textAndImage2.querySelectorAll('img');
          images2.forEach((img) => {
            img.classList.add('slideRight');
          });
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
    <div className="container_3" ref={blockRef2}>
      <p className="line_2"></p>
      <p className="title_3">Новые решения</p>
      <div className="text_and_image">
        <img src="/public/new_1.png" alt="" />
        <p className="new_title">Остекление оконных групп</p>
        <p className="new_text">
          В сфере оконных систем постоянно появляются новые и инновационные решения, которые предлагают улучшенную
          эффективность, удобство и безопасность для пользователей.
        </p>
      </div>
      <div className="text_and_image_2">
        <img src="/public/new_2.png" alt="" />
        <p className="new_title_2">Монтажные решения</p>
        <p className="new_text_1">
          В сфере оконных систем постоянно появляются новые и инновационные решения, которые предлагают улучшенную
          эффективность, удобство и безопасность для пользователей.
        </p>
      </div>
    </div>
  );
}

export default Thirst_Block;

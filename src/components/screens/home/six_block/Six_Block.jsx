import './Six_Block.css'
import React, {useEffect, useRef} from "react";

function Six_Block(){
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
      const object_title_1 = block.querySelector('.object_title_container_6_1');
      const object_title_2 = block.querySelector('.object_title_container_6_2');
      const object_title_3 = block.querySelector('.object_title_container_6_3');
      const object_title_4 = block.querySelector('.object_title_container_6_4');
      const object_title_5 = block.querySelector('.title_container_6');

      if (object_title_1) {
        object_title_1.classList.add('typing');
      }

      if (object_title_2) {
        object_title_2.classList.add('typing');
      }

      if (object_title_3) {
        object_title_3.classList.add('typing');
      }
      if (object_title_4) {
        object_title_4.classList.add('typing');
      }
      if (object_title_5) {
        object_title_5.classList.add('typing');
      }
    }
  }

  window.addEventListener('scroll', handleScroll1);
  handleScroll1(); // Вызываем при загрузке страницы

  return () => {
    window.removeEventListener('scroll', handleScroll1);
  };
}, []);

    return(
        <div className='container_6' ref={blockRef2}>
            <p className='line_4'></p>
            <h2 className='title_container_6'>Дополнительные опции для стеклопакетов</h2>
            <div className='object_container_6'>
                <div className='object_1_container_6'>
                    <p className='object_title_container_6_1'>Антирезонанс</p>
                    <img src='/public/icon_1.png'/>
                    <p className='object_text_container_6_1'>Поможет избавиться от внешнего шума и сохранить тишину в квартире. Засчёт особых оконных профилей</p>
                    <p className='grey_line'></p>
                </div>
                <div className='object_2_container_6'>
                    <p className='object_title_container_6_2'>Детский замок</p>
                    <img src='/public/icon_2.png'/>
                    <p className='object_text_container_6_2'>Если вы ищете окна с крайне низкими эксплуатационными расходами</p>
                    <p className='grey_line'></p>
                </div>
                <div className='object_3_container_6'>
                    <p className='object_title_container_6_3'>Цветовые решения</p>
                    <img src='/public/icon_3.png'/>
                    <p className='object_text_container_6_3'>Если вы ищете окна с крайне низкими эксплуатационными расходами</p>
                    <p className='grey_line'></p>
                </div>
                <div className='object_4_container_6'>
                    <p className='object_title_container_6_4'>аНТИ-ВЗЛОМ</p>
                    <img src='/public/icon_4.png'/>
                    <p className='object_text_container_6_4'>Если вы ищете окна с крайне низкими эксплуатационными расходами</p>
                </div>
             </div>
        </div>
    )

}


export default Six_Block
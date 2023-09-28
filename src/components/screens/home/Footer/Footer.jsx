import './Footer.css'

function Footer() {

    return(
        <div className='Footer'>
            <div className="Footer_Left">
            <p className='line_4'></p>
            <p className='Footer_title'>Alum Glass Stroy</p>
            <p className='Footer_address'>БЦ “Олимп” ул. Гагарина 157к.3,<br/> г. Краснодар</p>
            </div>
            <div className='Footer_center'>
                <p className='Footer_phone'>+7 (989) 141-28-08</p>
                <p className='Footer_mail'>info@glass.ru</p>
            </div>
            <div className='Footer_Right'>
                <p>Окна</p>
                <p>Проекты</p>
                <p>Балконы</p>
                <p>О нас</p>
                <p>Контакты</p>
            </div>
        </div>
    )
}

export default Footer
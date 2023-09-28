import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Alum Glass Stroy</h1>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#">Окна</a></li>
            <li><a href="#">Балконы</a></li>
            <li><a href="#">Проекты</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
        <div className="icons">
          <img src="/public/telegram.png" alt="Telegram" />
          <img src="/public/wa.jpg" alt="WhatsApp" />
          <img src="/public/mail.jpg" alt="Gmail" />
        </div>
      </div>
    </header>
  );
}
export default Header
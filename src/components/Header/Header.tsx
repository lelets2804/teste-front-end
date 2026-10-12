import './Header.scss';
import securityIcon from '../../assets/security.png';
import truckIcon from '../../assets/Truck.png';
import creditCardIcon from '../../assets/CreditCard.png';
import searchIcon from '../../assets/MagnifyingGlass.png';
import vectorIcon from '../../assets/Vector.png';
import heartIcon from '../../assets/Heart.png';
import userIcon from '../../assets/UserCircle.png';
import cartIcon from '../../assets/ShoppingCart.png';
import crownIcon from '../../assets/CrownSimple.png';

const menuItems = [
  'TODAS CATEGORIAS',
  'SUPERMERCADO',
  'LIVROS',
  'MODA',
  'LANÇAMENTO',
];

export function Header() {
  return (
    <header className="header">
      <ul className="header__benefits">
        <li>
          <img src={securityIcon} alt="" />
          <span>Compra <strong>100% segura</strong></span>
        </li>
        <li>
          <img src={truckIcon} alt="" />
          <span><strong>Frete grátis</strong> acima de R$ 200</span>
        </li>
        <li>
          <img src={creditCardIcon} alt="" />
          <span><strong>Parcele</strong> suas compras</span>
        </li>
      </ul>

      <div className="header__main">
        <a href="/" className="header__logo" aria-label="Econverse">
          <span className="header__logo-circle">ec</span>
          <span className="header__logo-text">onverse</span>
        </a>

        <form className="header__search" role="search">
          <input type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar">
            <img src={searchIcon} alt="" />
          </button>
        </form>

        <div className="header__actions">
          <button type="button" aria-label="Meus pedidos">
            <img src={vectorIcon} alt="" />
          </button>
          <button type="button" aria-label="Favoritos">
            <img src={heartIcon} alt="" />
          </button>
          <button type="button" aria-label="Minha conta">
            <img src={userIcon} alt="" />
          </button>
          <button type="button" aria-label="Carrinho">
            <img src={cartIcon} alt="" />
          </button>
        </div>
      </div>

      <nav className="header__menu" aria-label="Menu principal">
        <ul>
          {menuItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
          <li>
            <a href="#" className="header__menu-highlight">OFERTA DO DIA</a>
          </li>
          <li>
            <a href="#" className="header__menu-subscription">
              <img src={crownIcon} alt="" />
              ASSINATURA
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
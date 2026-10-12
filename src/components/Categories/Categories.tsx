import './Categories.scss';
import technologyIcon from '../../assets/image.png';
import supermarketIcon from '../../assets/supermercados.png';
import drinksIcon from '../../assets/whiskey.png';
import toolsIcon from '../../assets/ferramentas.png';
import healthIcon from '../../assets/cuidados-de-saude.png';
import sportsIcon from '../../assets/corrida.png';
import fashionIcon from '../../assets/moda.png';

const categories = [
  { name: 'Tecnologia', icon: technologyIcon, active: true },
  { name: 'Supermercado', icon: supermarketIcon },
  { name: 'Bebidas', icon: drinksIcon },
  { name: 'Ferramentas', icon: toolsIcon },
  { name: 'Saúde', icon: healthIcon },
  { name: 'Esportes e Fitness', icon: sportsIcon },
  { name: 'Moda', icon: fashionIcon },
];

export function Categories() {
  return (
    <nav className="categories" aria-label="Categorias">
      <ul className="categories__list">
        {categories.map((category) => (
          <li key={category.name}>
            <button
              type="button"
              className={`categories__item ${
                category.active ? 'categories__item--active' : ''
              }`}
            >
              <span className="categories__card">
                <img src={category.icon} alt="" />
              </span>
              <span className="categories__name">{category.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
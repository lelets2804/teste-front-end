import './Brands.scss';

const brands = [1, 2, 3, 4, 5];

export function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title"> Navegue por marcas </h2>

      <ul className="brands__list">
        {brands.map((brand) => (
          <li key={brand}>
            <a href="#" className="brands__item" aria-label="Econverse">
              <span className="brands__logo-circle">ec</span>
              <span className="brands__logo-text">onverse</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
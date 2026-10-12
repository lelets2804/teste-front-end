import './Banner.scss';
import bannerImage from '../../assets/Rectangle.png';

export function Banner() {
  return (
    <section className="banner" style={{ backgroundImage: `url(${bannerImage})` }} >
      <div className="banner__content">
        <h1 className="banner__title">Venha conhecer nossas promoções</h1>
        <p className="banner__subtitle"> <strong>50% Off</strong> nos produtos </p>
        <button type="button" className="banner__button"> Ver produto</button>
      </div>
    </section>
  );
}
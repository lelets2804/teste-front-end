import './Partners.scss';
import partnerImage from '../../assets/banner.png';

const partners = [1, 2];

export function Partners() {
  return (
    <section className="partners" aria-label="Parceiros">
      {partners.map((partner) => (
        <article key={partner} className="partners__card" style={{ backgroundImage: `url(${partnerImage})` }} >
          <div className="partners__content">
            <h2 className="partners__title">Parceiros</h2>
            <p className="partners__text"> Lorem ipsum dolor sit amet, consectetur </p>
            <a href="#" className="partners__button"> CONFIRA </a>
          </div>
        </article>
      ))}
    </section>
  );
}
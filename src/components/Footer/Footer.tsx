import './Footer.scss';

const columns = [
  {
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="Econverse">
            <span className="footer__logo-circle">ec</span>
            <span className="footer__logo-text">onverse</span>
          </a>

          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul className="footer__social">
            <li>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                  <path d="M14 8.5h2V5h-2.5C11 5 10 6.5 10 8.5V10H8v3.5h2V20h3.5v-6.5H16l.5-3.5h-3V9c0-.3.2-.5.5-.5z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 10v9M5 6.5v.01M10 19v-9M10 14c0-2.5 1.5-4 3.5-4s3 1.5 3 4v5" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer__columns" aria-label="Links do rodapé">
          {columns.map((column) => (
            <div key={column.title} className="footer__column">
              <h3 className="footer__column-title">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}
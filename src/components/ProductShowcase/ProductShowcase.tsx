import { useEffect, useRef, useState } from 'react';
import type { Product } from '../../types/Product';
import { getProducts } from '../../services/productService';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductShowcase.scss';

interface ProductShowcaseProps {
  onSelectProduct: (product: Product) => void;
  showTabs?: boolean;
}

const tabs = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

export function ProductShowcase({
  onSelectProduct,
  showTabs = true,
}: ProductShowcaseProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('CELULAR');
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError('Não foi possível carregar os produtos.'));
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const list = listRef.current;
    if (!list) return;
    const amount = list.clientWidth / 2;
    list.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="showcase">
      <div className="showcase__heading">
        <h2 className="showcase__title">Produtos relacionados</h2>
      </div>

      {showTabs ? (
        <ul className="showcase__tabs">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                type="button" className={`showcase__tab ${ activeTab === tab ? 'showcase__tab--active' : '' }`} onClick={() => setActiveTab(tab)} >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <a href="#" className="showcase__see-all">
          Ver todos
        </a>
      )}

      {error && <p className="showcase__error">{error}</p>}

      <div className="showcase__carousel">
        <button type="button" className="showcase__arrow showcase__arrow--left" aria-label="Produtos anteriores" onClick={() => scroll('left')} > ‹ </button>

        <div className="showcase__list" ref={listRef}>
          {products.map((product) => (
            <ProductCard key={product.productName} product={product} onSelect={onSelectProduct} /> ))}
        </div>

        <button type="button" className="showcase__arrow showcase__arrow--right" aria-label="Próximos produtos" onClick={() => scroll('right')} > › </button>
      </div>
    </section>
  );
}
import type { Product } from '../../types/Product';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={product.photo}
        alt={product.productName}
      />
      <h3 className="product-card__name">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h3>
      <p className="product-card__old-price">R$ 30,90</p>
      <p className="product-card__price">R$ 28,90</p>
      <p className="product-card__installments">
        ou 2x de R$ 49,95 sem juros
      </p>
      <p className="product-card__shipping">Frete grátis</p>
      <button
        type="button"
        className="product-card__button"
        onClick={() => onSelect(product)}
      >
        COMPRAR
      </button>
    </article>
  );
}
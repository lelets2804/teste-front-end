import { useEffect, useState } from 'react';
import type { Product } from '../../types/Product';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const formatPrice = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__box" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()} >
        <button type="button" className="modal__close" aria-label="Fechar" onClick={onClose}> × </button>

        <img className="modal__image" src={product.photo} alt={product.productName} />

        <div className="modal__info">
          <h2 id="modal-title" className="modal__title">
            {product.productName}
          </h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__description">{product.descriptionShort}</p>
          <a href="#" className="modal__details">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="modal__actions">
            <div className="modal__quantity">
              <button type="button" aria-label="Diminuir quantidade" onClick={() => setQuantity((q) => Math.max(1, q - 1))}  > − </button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button type="button" aria-label="Aumentar quantidade" onClick={() => setQuantity((q) => q + 1)} > + </button>
            </div>
            <button type="button" className="modal__buy">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
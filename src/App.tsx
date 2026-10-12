import { useState } from 'react';
import type { Product } from './types/Product';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Categories } from './components/Categories/Categories';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';
import { Partners } from './components/Partners/Partners';
import { Brands } from './components/Brands/Brands';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Footer } from './components/Footer/Footer';
import { ProductModal } from './components/ProductModal/ProductModal';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <main>
        <ProductShowcase onSelectProduct={setSelectedProduct} />
        <Partners />
        <ProductShowcase onSelectProduct={setSelectedProduct} showTabs={false} />
        <Partners />
        <Brands />
        <ProductShowcase onSelectProduct={setSelectedProduct} showTabs={false} />
      </main>
      <Newsletter />
      <Footer />

      {selectedProduct && ( <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />)}
    </>
  );
}

export default App;
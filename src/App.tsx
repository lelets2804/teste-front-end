import { useState } from 'react';
import type { Product } from './types/Product';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Categories } from './components/Categories/Categories';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';
import { Partners } from './components/Partners/Partners';

function App() {
  const [, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <main>
        <ProductShowcase onSelectProduct={setSelectedProduct} />
        <Partners />
      </main>
    </>
  );
}

export default App;
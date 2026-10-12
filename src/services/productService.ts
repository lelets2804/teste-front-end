import type { Product, ProductsResponse } from '../types/Product';

const PRODUCTS_URL =
  '/api-econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error('Não foi possível carregar os produtos.');
  }

  const data: ProductsResponse = await response.json();
  return data.products;
}
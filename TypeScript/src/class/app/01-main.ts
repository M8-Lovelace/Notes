import axios from 'axios';

import { Product } from './models/product.model';

let anyVar: any = 12;
let boolVar: boolean = anyVar;

(async ()=> {
  // Sintaxis de axios
  // const { data } = axios.get<dataType>(URL);

  // Tipar desde el retorno
  // async function getProducts(): Promise<Product[]> {
  //   const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  //   return data;
  // }

  // Aserción de tipos con as
  // async function getProducts() {
  //   const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
  //   const data = rta.data as Product[];
  // }

  // Recomendada
  async function getProducts() {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }

  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}}`));
})();
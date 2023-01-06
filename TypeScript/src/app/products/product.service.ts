import {faker} from '@faker-js/faker';

import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

// Actualizacion de los campos del producto
// Con el Producto['id'] me traigo el tipado del id
export const updateProduct = (id: Product['id'], changes: UpdateProductDto ): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    // Hace un merge entre ambos
    // Replica datos antiguos
    ...prevData,
    // Replica datos nuevos
    ...changes
  }
  return products[index];
}

// Busqueda de productos
export const findProducts = (dto: FindProductDto): Product[] => {
  // Los datos llegan en solo lectura
  return products;
}
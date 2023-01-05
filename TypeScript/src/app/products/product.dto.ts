// Data Transfer Objects (Objetos de transferencia de datos)
// Una buena práctica es que los DTOs tengan su propio archivo.
import { Product } from './product.model';

// El Omit nos ayuda a omitir ciertos valores que vamos a recibir de un tipo o de una interface
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

// El Pick nos ayuda a escoger los campos, en lugar de omitir la mayoría.
type example = Pick<Product, 'color' | 'description'>;
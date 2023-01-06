// Data Transfer Objects (Objetos de transferencia de datos)
// Una buena práctica es que los DTOs tengan su propio archivo.
import { Product } from './product.model';

// El Omit nos ayuda a omitir ciertos valores que vamos a recibir de un tipo o de una interface
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

// El Pick nos ayuda a escoger los campos, en lugar de omitir la mayoría.
type example = Pick<Product, 'color' | 'description'>;

// El Partial pone todos lo atributos en opcionales
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Con el Required todos sus atributos son requeridos
type example2 = Required<Product>;

// ReadOnlyArray, se omite el TAGS, se colocan todos opcionales y se colocan todos en modo readonly
// Recordar que el ReadOnlyArray no permite mutar, y el readonly en el property no permite reasignaciones
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

// Todo los parametros sean de lectura
type example3 = Readonly<Product>;
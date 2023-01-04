import { BaseModel } from './../base.model';
import { Product } from './../products/product.model';
import { User } from './../users/user.model';

// Extender la interfaz Base Model
export interface Order extends BaseModel {
  products: Product[];
  user: User;
}
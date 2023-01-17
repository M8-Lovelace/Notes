import axios from "axios";

// Interfaz de productos
interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Category;
}

// Interfaz de categoría
interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

(async () => {
  // Crear la instancia de axios
  const platzi = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/products"
  });

  async function getProductsAsync(): Promise<string[]> {
    // Si quieres utilizar el tipo de la respuesta, puedes utilizar el tipo genérico de la instancia de axios.
    const { data } = await platzi.get<Products[]>(
      "https://api.escuelajs.co/api/v1/products"
    );
    // O forzar si es necesario
    // const forceData = data as Products[];
    return data.slice(0, 2).map((item) => `${item.id} - ${item.description}`);
  }

  const productsAsync = await getProductsAsync();
  console.log(productsAsync);
})();

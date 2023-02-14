const articles = [
  { id: 1, idCategoria: 1, producto: 'Monitor 20 Pulgadas', precio: 500 },
  { id: 2, idCategoria: 2, producto: 'Televisión 50 Pulgadas', precio: 700 },
  { id: 3, idCategoria: 5, producto: 'Tablet', precio: 300 },
  { id: 4, idCategoria: 3, producto: 'Audífonos', precio: 200 },
  { id: 5, idCategoria: 3, producto: 'Teclado', precio: 50 },
  { id: 6, idCategoria: 5, producto: 'Celular', precio: 500 },
  { id: 7, idCategoria: 3, producto: 'Bocinas', precio: 300 },
  { id: 8, idCategoria: 4, producto: 'Laptop', precio: 800 },
  { id: 9, idCategoria: 1, producto: 'Monitor 24 Pulgadas', precio: 290 },
  { id: 10, idCategoria: 2, producto: 'Televisor de 22 pulgadas', precio: 1290 },
];

const category = [
  { id: 1, descripcion: "Monitores" },
  { id: 2, descripcion: "Televisores" },
  { id: 3, descripcion: "Periféricos" },
  { id: 4, descripcion: "Computadores" },
  { id: 5, descripcion: "Tablets y Celulares" },
  { id: 6, descripcion: "Impresoras" },
];

const getArticles = async (id) => {
  let articulosDB = articles.filter(articulo => articulo.idCategoria === id)
  if (articulosDB.length === 0) {
    throw new Error(`No existen un articulos con el ID ${id}`)
  }
  else {
    return articulosDB;
  }
}

const getCategory = async (id) => {
  let categoryDB = category.find(c => c.id === id)

  if (!categoryDB) {
    throw new Error(`No existe una categoria con el ID ${id}`)
  }
  else {
    return categoryDB;
  }
}

const getInfo = async (id) => {
  try {
    const myCategory = await getCategory(id);
    const myArticles = await getArticles(myCategory.id);
    console.log('LOS SIGUIENTES ARTICULOS PERTENECEN A LA CATEGORIA');
    console.log(`xxxx ${myCategory.descripcion} xxxx`);
    for (articulo of myArticles) {
      console.log(articulo.producto);
    }
  } catch (error) {
    throw error;
  }
}

getInfo(3);
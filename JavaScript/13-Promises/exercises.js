const articulos = [
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

const categorias = [
  { id: 1, descripcion: "Monitores" },
  { id: 2, descripcion: "Televisores" },
  { id: 3, descripcion: "Periféricos" },
  { id: 4, descripcion: "Computadores" },
  { id: 5, descripcion: "Tablets y Celulares" },
  { id: 6, descripcion: "Impresoras" },
];

const getArticulos = (category) => {
  return new Promise((resolve, reject) => {
    let articulosDB = articulos.filter(articulo => articulo.idCategoria === category.id)
    if (articulosDB.length === 0) {
      reject(`No existen un articulos con el ID ${category.id}`)
    } else {
      resolve(articulosDB);
    }
  });
}

const getCategory = (id) => {
  return new Promise((resolve, reject) => {
    let categoryDB = categorias.find(category => category.id === id)

    if (!categoryDB) {
      reject(`No existe una categoria con el ID ${id}`)
    } else {
      resolve(categoryDB);
    }
  })
}

getCategory(3).then(category => {
  getArticulos(category).then(articulos => {
    console.log('LOS SIGUIENTES ARTICULOS PERTENECEN A LA CATEGORIA');
    console.log(`xxxx ${category.descripcion} xxxx`);
    for (articulo of articulos) {
      console.log(articulo.producto);
    }
  })
  .catch(err => console.log(err));
})



// getArticulos = (category, callback) => {
//   let articulosDB = articulos.filter(articulo => articulo.idCategoria === category.id)
//   if (articulosDB.length === 0) {
//     callback(`No existen un articulos con el ID ${category.id}`, null)
//   } else {
//     callback(null, articulosDB);
//   }
// }

// getCategory = (id, callback) => {
//   let categoryDB = categorias.find(category => category.id === id)

//   if (!categoryDB) {
//     callback(`No existe una categoria con el ID ${id}`, null)
//   } else {
//     callback(null, categoryDB);
//   }
// }

// const myCategory = getCategory(1, (err, category) => {
//   if (err) {
//     return console.log(err);
//   }
//   else {
//     const myArticulos = getArticulos(category, (err, articulo) => {
//       if (err) {
//         return console.log(err);
//       }
//       else {
//         console.log('LOS SIGUIENTES ARTICULOS PERTENECEN A LA CATEGORIA');
//         console.log(`xxxx ${category.descripcion} xxxx`);
//         for (articulo of articulo) {
//           console.log(articulo.producto);
//         }
//       }
//     });
//   }
// });
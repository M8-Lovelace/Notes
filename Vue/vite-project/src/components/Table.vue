<!-------------------- DIRECTIVAS --------------------->

<template>
  <div>
    <h1 class="text-center fw-bold">TABLA DE PRODUCTOS</h1>
    <table class="table table-striped table-dark mt-2">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Costo</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Proveedor</th>
          <th scope="col">Estado</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in productos" :key="i">
          <td>{{ p.nombre }}</td>
          <td>{{ p.precio }}</td>
          <td>{{ p.costo }}</td>
          <td>
            <span v-if="p.cantidad < 10" style="color: red">{{
              p.cantidad
            }}</span>
            <span v-else-if="p.cantidad > 50" style="color: blue">{{
              p.cantidad
            }}</span>
            <span v-else>{{ p.cantidad }}</span>
          </td>
          <td>{{ p.proveedor }}</td>
          <td>
            <span v-if="p.estado === 0" style="color: red">Inactivo</span>
            <span v-else style="color: green">Activo</span>
          </td>
          <td>
            <button type="button" class="me-2 botones" @click="editarProducto(p, i)" data-toggle="modal"
              data-target="#exampleModalLong">
              ✍
            </button>
            <button @click="reemplazarEstados(i)" class="me-2 botones">
              <span class="uno" v-if="p.estado === 0">🟢</span>
              <span v-else>🔴</span>
            </button>
            <button class="botones" @click="eliminarProducto(i)">
              <span>🗑</span>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td><b></b></td>
          <td>{{ totalPrecio }}</td>
          <td>{{ totalCosto }}</td>
          <td>{{ totalCantidad }}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><b>Total:</b></td>
          <td>{{ suma1 }}</td>
          <td>{{ suma2 }}</td>
          <td></td>
          <td></td>
          <td>Ganancias:</td>
          <td>{{ totalGanancias }}</td>
        </tr>
      </tfoot>
    </table>

    <div class="div-boton mb-5">
      <button type="button" @click="limpiarCampos(1)" data-toggle="modal" data-target="#exampleModalLong"
        class="m-auto px-5 py-2 boton">
        Agregar
      </button>
    </div>

    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle2"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle2">
              <b>{{ titulo }}</b>
            </h5>
          </div>
          <div class="modal-body text-center">
            <label class="me-2"><b>Nombre:</b> </label><br />
            <input type="text" v-model="nombreProducto" :disabled="desabilitarInput == 1" :style="[estiloInput, estilo1]"
              class="p-1 ps-3" /><br /><br />
            <label class="me-2"><b>Precio:</b> </label><br />
            <input type="number" v-model="precioProducto" :disabled="desabilitarInput == 1"
              :style="[estiloInput, estilo2]" class="p-1 ps-3" /><br /><br />
            <label class="me-2"><b>Costo: </b></label><br />
            <input type="number" v-model="costoProducto" :disabled="desabilitarInput == 1" :style="[estiloInput, estilo3]"
              class="p-1 ps-3" /><br /><br />
            <label class="me-2"><b>Cantidad:</b> </label><br />
            <input type="number" v-model="cantidadProducto" :disabled="desabilitarInput == 1"
              :style="[estiloInput, estilo4]" class="p-1 ps-3" /><br /><br />
            <label class="me-2"><b>Proveedor:</b> </label><br />
            <input type="text" v-model="proveedorProducto" :disabled="desabilitarInput == 1"
              :style="[estiloInput, estilo5]" class="p-1 ps-3" /><br /><br />
            <label class="me-2"><b>Estado:</b> </label><br />
            <select v-model="estadoProducto" class="form-select form-select-sm w-50 m-auto p-2"
              aria-label=".form-select-sm example" :disabled="desabilitarInput == 1" :style="[estiloInput, estilo6]">
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Cerrar
            </button>
            <button type="button" class="btn btn-light enviar" @click="comprobarFormulario(index)"
              :disabled="desabilitarInput == 1">
              {{ boton }}
            </button>
          </div>

          <div class="m-2">
            <div v-if="alerta == 1" :style="estiloAlerta" class="alert px-4" role="alert">
              <strong>Atención!</strong> {{ mensaje }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    let productos = ref([
      {
        nombre: "Jabon",
        precio: 2000,
        costo: 1800,
        cantidad: 8,
        proveedor: "Jabones SA",
        estado: 0,
      },
      {
        nombre: "Arroz",
        precio: 4000,
        costo: 3400,
        cantidad: 45,
        proveedor: "Arrocera",
        estado: 1,
      },
      {
        nombre: "Azucar Morena",
        precio: 3000,
        costo: 2200,
        cantidad: 67,
        proveedor: "Ingenio",
        estado: 0,
      },
      {
        nombre: "Escoba cepillo",
        precio: 6200,
        costo: 4000,
        cantidad: 12,
        proveedor: "Limpieza",
        estado: 1,
      },
      {
        nombre: "Detergente",
        precio: 2000,
        costo: 1800,
        cantidad: 6,
        proveedor: "Jabones SA",
        estado: 1,
      },
      {
        nombre: "Bombillo",
        precio: 2000,
        costo: 1800,
        cantidad: 2,
        proveedor: "Light SA",
        estado: 0,
      },
      {
        nombre: "Shampu",
        precio: 2000,
        costo: 1800,
        cantidad: 16,
        proveedor: "Champu SA",
        estado: 1,
      },
    ]);

    let nombreProducto = ref();
    let precioProducto = ref();
    let costoProducto = ref();
    let cantidadProducto = ref();
    let proveedorProducto = ref();
    let estadoProducto = ref();

    let titulo = ref();
    let boton = ref();
    let mensaje = ref();
    let index = ref();
    let alerta = ref();
    let desabilitarInput = ref();
    let estiloAlerta = ref();
    let estiloInput = ref();
    let estilo1 = ref();
    let estilo2 = ref();
    let estilo3 = ref();
    let estilo4 = ref();
    let estilo5 = ref();
    let estilo6 = ref();

    function reemplazarEstados(i) {
      if (productos.value[i].estado === 0) {
        productos.value[i].estado = 1;
      } else {
        productos.value[i].estado = 0;
      }
    }

    function comprobarFormulario(i) {
      estiloInput.value = "background-color: white;";
      if (boton.value == "Registrar") {
        desabilitarInput.value = false;
        titulo.value = "Registrar Producto";
        boton.value = "Registrar";
      }
      verificarDatos(i);
    }

    function verificarDatos(i) {
      estiloInput.value = "background-color: white;";
      if (nombreProducto.value === "") {
        estilo1.value = "border: 2px solid red;";
        alerta.value = 1;
        mensaje.value = "El nombre del producto es obligatorio";
        estiloAlerta.value =
          "background-color: red; color: white; font-weight: bold; font-size: 14px";
        setInterval(() => {
          alerta.value = 0;
          estilo1.value = "border: 2px solid #ced4da;";
        }, 3000);
      } else if (precioProducto.value === "") {
        estilo2.value = "border: 2px solid red;";
        alerta.value = 1;
        mensaje.value = "El precio del producto es obligatorio";
        estiloAlerta.value =
          "background-color: red; color: white; font-weight: bold; font-size: 14px";
        setInterval(() => {
          alerta.value = 0;
          estilo2.value = "border: 2px solid #ced4da;";
        }, 3000);
      } else if (costoProducto.value === "") {
        estilo3.value = "border: 2px solid red;";
        alerta.value = 1;
        mensaje.value = "El costo del producto es obligatorio";
        estiloAlerta.value =
          "background-color: red; color: white; font-weight: bold; font-size: 14px";
        setInterval(() => {
          alerta.value = 0;
          estilo3.value = "border: 2px solid #ced4da;";
        }, 3000);
      } else if (cantidadProducto.value === "") {
        estilo4.value = "border: 2px solid red;";
        alerta.value = 1;
        mensaje.value = "La cantidad del producto es obligatorio";
        estiloAlerta.value =
          "background-color: red; color: white; font-weight: bold; font-size: 14px";
        setInterval(() => {
          alerta.value = 0;
          estilo4.value = "border: 2px solid #ced4da;";
        }, 3000);
      } else if (proveedorProducto.value === "") {
        estilo5.value = "border: 2px solid red;";
        alerta.value = 1;
        mensaje.value = "El proveedor del producto es obligatorio";
        estiloAlerta.value =
          "background-color: red; color: white; font-weight: bold; font-size: 14px";
        setInterval(() => {
          alerta.value = 0;
          estilo5.value = "border: 2px solid #ced4da;";
        }, 3000);
      } else if (estadoProducto.value === "") {
        estilo6.value = "border: 2px solid red;";
        alerta.value = 1;
        mensaje.value = "El estado del producto es obligatorio";
        estiloAlerta.value =
          "background-color: red; color: white; font-weight: bold; font-size: 14px";
        setInterval(() => {
          alerta.value = 0;
          estilo6.value = "border: 2px solid #ced4da;";
        }, 3000);
      } else if (costoProducto.value >= precioProducto.value) {
        alerta.value = 1;
        estilo3.value = "border: 2px solid red;";
        estilo2.value = "border: 2px solid red;";
        mensaje.value = "El costo no puede ser mayor o igual al precio";
        estiloAlerta.value =
          "background-color: red; color: white; font-weight: bold; font-size: 14px";
        setInterval(() => {
          alerta.value = 0;
          estilo3.value = "border: 2px solid #ced4da;";
          estilo2.value = "border: 2px solid #ced4da;";
        }, 3000);
      } else if (precioProducto.value > 0) {
        alerta.value = 1;
        estilo2.value = "border: 2px solid red;";
        mensaje.value = "El precio no puede ser negativo";
        alerta.value = 1;
        estiloAlerta.value =
          "background-color: red; color: white; font-weight: bold; font-size: 14px";
        setInterval(() => {
          alerta.value = 0;
        }, 3000);
      } else if (cantidadProducto.value > 0) {
        alerta.value = 1;
        estilo4.value = "border: 2px solid red;";
        mensaje.value = "La cantidad no puede ser negativa";
        alerta.value = 1;
        estiloAlerta.value =
          "background-color: red; color: white; font-weight: bold; font-size: 14px";
        setInterval(() => {
          alerta.value = 0;
        }, 3000);
      } else if (costoProducto.value > 0) {
        alerta.value = 1;
        estilo3.value = "border: 2px solid red;";
        mensaje.value = "El costo no puede ser negativo";
        alerta.value = 1;
        estiloAlerta.value =
          "background-color: red; color: white; font-weight: bold; font-size: 14px";
        setInterval(() => {
          alerta.value = 0;
        }, 3000);
      } else if (boton.value == "Guardar Cambios") {
        guardarCambios(i);
      } else {
        registrar();
      }
    }

    function registrar() {
      productos.value.push({
        nombre: nombreProducto.value,
        precio: precioProducto.value,
        costo: costoProducto.value,
        cantidad: cantidadProducto.value,
        proveedor: proveedorProducto.value,
        estado: estadoProducto.value,
      });
      desabilitarInput.value = 1;

      alerta.value = 1;
      mensaje.value = "Producto registrado con éxito";
      estiloInput.value = "background-color: #e0e0e0;";
      estiloAlerta.value =
        "background-color: #4caf50; color: white; font-weight: bold";
      setInterval(() => {
        alerta.value = 0;
      }, 3000);
    }

    function editarProducto(p, i) {
      estiloInput.value = "background-color: white;";
      titulo.value = "Editar Producto";
      boton.value = "Guardar Cambios";
      alerta.value = 0;
      desabilitarInput.value = 0;
      index.value = i;
      nombreProducto.value = p.nombre;
      precioProducto.value = p.precio;
      costoProducto.value = p.costo;
      cantidadProducto.value = p.cantidad;
      proveedorProducto.value = p.proveedor;
      estadoProducto.value = p.estado;
      if (estadoProducto.value == 1) {
        estadoProducto.value = "Activo";
      } else {
        estadoProducto.value = "Inactivo";
      }
    }

    function guardarCambios(i) {
      productos.value[i].nombre = nombreProducto.value;
      productos.value[i].precio = precioProducto.value;
      productos.value[i].costo = costoProducto.value;
      productos.value[i].cantidad = cantidadProducto.value;
      productos.value[i].proveedor = proveedorProducto.value;
      productos.value[i].estado = estadoProducto.value;
      desabilitarInput.value = 1;
      alerta.value = 1;
      mensaje.value = "Producto editado con exito";
      estiloInput.value = "background-color: #e0e0e0;";
      estiloAlerta.value =
        "background-color: green; color: white; font-weight: bold; font-size: 14px";
      setInterval(() => {
        alerta.value = 0;
      }, 3000);
    }

    function eliminarProducto(i) {
      productos.value.splice(i, 1);
    }

    function limpiarCampos(i) {
      if (i == 1) {
        titulo.value = "Registrar Producto";
        boton.value = "Registrar";
        desabilitarInput.value = 0;
      }
      estiloInput.value = "background-color: white;";
      alerta.value = 0;
      estadoProducto.value = "";
      nombreProducto.value = "";
      precioProducto.value = "";
      costoProducto.value = "";
      cantidadProducto.value = "";
      proveedorProducto.value = "";
    }

    const totalPrecio = computed(() => {
      return productos.value.reduce((acumulador, current) => acumulador + parseInt(current.precio), 0)
    })

    const totalCosto = computed(() => {
      return productos.value.reduce((acumulador, current) => acumulador + parseInt(current.costo), 0)
    })

    const totalCantidad = computed(() => {
      return productos.value.reduce((acumulador, current) => acumulador + parseInt(current.cantidad), 0)
    })

    const suma1 = computed(() => {
      return totalPrecio.value * totalCantidad.value
    })

    const suma2 = computed(() => {
      return totalCosto.value * totalCantidad.value
    })

    const totalGanancias = computed(() => {
      return suma1.value - suma2.value
    })

    return {
      productos,

      reemplazarEstados,
      comprobarFormulario,
      desabilitarInput,
      guardarCambios,
      editarProducto,
      limpiarCampos,
      eliminarProducto,
      totalPrecio,
      totalCosto,
      totalCantidad,
      totalGanancias,
      suma1,
      suma2,

      nombreProducto,
      precioProducto,
      costoProducto,
      cantidadProducto,
      proveedorProducto,
      estadoProducto,
      index,
      alerta,
      titulo,
      boton,
      mensaje,
      estiloAlerta,
      estiloInput,
      estilo1,
      estilo2,
      estilo3,
      estilo4,
      estilo5,
      estilo6,
    };
  }
}
</script>

<style>
.table {
  border: 3px solid rgb(0, 0, 0);
  margin: auto;
  text-align: center;
  color: #ffffff;
  max-width: 1000px;
}

.botones {
  padding: 10px;
  border-radius: 40%;
  border: 2px solid rgb(0, 0, 0);
}

.botones:hover {
  background-color: rgb(0, 0, 0);
  border-radius: 40%;
  color: white;
}

input {
  width: 50%;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 3px;
}

.div-boton {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px;
}

.boton {
  border: 3px solid rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  font-weight: bold;
}

.boton:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}

.enviar {
  border: 2px solid black;
}

.enviar:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}
</style>
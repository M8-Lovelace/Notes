// Variables
let employees = [
  { id: 1, nombre: 'Miguel' },
  { id: 2, nombre: 'Juan' },
  { id: 3, nombre: 'Pedro' }
]

let salaries = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 2000 }
]

// Obteniendo empleado
const getEmploye = async (id) => {
  const employee = employees.find((e) => e.id === id);
  if (employee) {
    // Retornando empleado
    return employee; // { id: 1, nombre: 'Miguel' }
  } else {
    throw new Error(`No existe empleado con id ${id}`);
  }
}

// Obteniendo salario de un empleado
const getSalary = async (id) => {
  const salary = salaries.find((s) => s.id === id)?.salario;
  if (salary) {
    return salary; // 1000
  } else {
    throw new Error(`No existe salario con id ${id}`);
  }
}

// Función principal
const getInfoUser = async (id) => {
  try {
    // El wait es para esperar a que se resuelva la promesa
    // Retornando empleado con id 1 (Miguel)
    const employee = await getEmploye(id); // { id: 1, nombre: 'Miguel' }
    // Retornando salario del empleado con id 1 (Miguel)
    const salary = await getSalary(id); // 1000
    console.log( `El salario del empleado ${employee.nombre} es de ${salary}`)
  } catch (error) {
    throw error;
  }
}

getInfoUser(1);
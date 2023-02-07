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

const getEmployee = (id, callback) => {
  // Buscar empleado por el id
  let employeeDB = employees.find(employee => employee.id === id)
  // Si existe o no el empleado
  if (!employeeDB) {
    callback(`No existe un empleado con el ID ${id}`, null)
  } else {
    // Devolver el empleado encontrado en la base de datos (employees)
    callback(null, employeeDB);
  }
}

const getsalaries = (employee, callback ) => {
  // Buscar salario por el id
  let salaryDB = salaries.find(salary => salary.id === employee.id)
  // Si existe o no el salario
  if (!salaryDB) {
    callback(`No existe un salario con el ID ${employee.id}`, null)
  } else {
    // Devolver el salario encontrado en la base de datos (salaries)
    callback(null, salaryDB);
  }
}

// Llamada a la función getEmployee con un callback que recibe el error 
// y el empleado encontrado en la base de datos (employees)
const myEmployee = getEmployee(1, (err, employee) => {
  // Si existe un error
  if (err) {
    return console.log(err);
  }
  else {
    // Si no existe un error
    console.log(employee); // { id: 1, nombre: 'Miguel' }
    const mySalaries = getsalaries(employee, (err, salary) => {
      if (err) {
        return console.log(err);
      }
      else {
        console.log(salary); // { id: 1, salario: 1000 }
        console.log(`El empleado ${employee.nombre} gana ${salary.salario}`); // El empleado Miguel gana 1000
      }
    });
  }
});

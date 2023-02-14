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

const getEmploye = (id) => {
  return new Promise((resolve, reject) => {
    const employee = employees.find((e) => e.id === id);
    employee ? resolve(employee) : reject(`No existe empleado con id ${id}`);
  });
}

// Obteniendo salario de un empleado
const getSalary = (id) => {
  return new Promise((resolve, reject) => {
    const salary = salaries.find((s) => s.id === id)?.salario;
    salary ? resolve(salary) : reject(`No existe salario con id ${id}`);
  });
}

// Llamando a las promesa en para obtener el salario de un empleado
getEmploye(3).then(employee =>
  getSalary(employee.id).then ( (salary) => 
    console.log(`El empleado con nombre ${employee.nombre} con un salario de ${salary}`)
    ) , (err) => (console.log(err))) // 1000
  .catch(error => console.error(error)) // No existe salario con id 3
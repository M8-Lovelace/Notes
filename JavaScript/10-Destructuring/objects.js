const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

// Las propiedades del objeto no tienen que declararse en un orden específico.
function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  // My car is a red Ford Mustang.
}

const vehicleTwo = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleTwo);

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
  // My Mustang is registered in Texas.
}
// Importamos el type User y el enum ROLES
import { User, ROLES } from './10-enums';

// Usuario a verificar
const currentUser: User = {
  username: 'babbage',
  role: ROLES.CUSTOMER
}

// --------------------------------------------------------------------//
// Función que verifica el rol de ADMIN
export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

// Verifica que el usurio 'babbage' sea el admin
const rta = checkAdminRole();
console.log('checkAdminRole', rta);

// --------------------------------------------------------------------//
// Verficar si babbage es admin o seller
export const checkRole = (role1: string, role2:string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

// Envia los dos roles a verificar
const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2);

// --------------------------------------------------------------------//
// Verifica los roles en la array
export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.CUSTOMER]);
console.log('checkRoleV2', rta3);

// --------------------------------------------------------------------//
// Refactor con rest
export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

// Todos los parametros los pasamos a un array sin tener que poner las []
const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV3', rta4);

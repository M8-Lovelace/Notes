// Creación de un namespace - vendrían siendo como clases pequeñas que contienen funcionalidades
// --------------------------------------------------------------------//
namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  export const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

Validations.validateText("Laura");
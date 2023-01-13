import { Animal, Dog } from './08-protected';

// Las clases abstractas son tan ‘genericas’ que no tiene sentido que sean instanciadas. Usamos la keyword abstract.
const animal = new Animal('elite');
animal.greeting();

const cheis = new Dog('cheis', 'nico');
cheis.greeting();
cheis.woof(2);
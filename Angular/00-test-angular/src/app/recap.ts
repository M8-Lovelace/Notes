const username: string | number = 'lovelace';

const sum = (a:number, b:number) => {
  return a+b;
}

sum(1,2);

class Person {
  constructor(public age:number, public lastName: string){
  }
}

const edwin = new Person(23, "Páez")


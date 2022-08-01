interface IEmployee {
  code: number;
  name: string;
}

class Employee implements IEmployee {
  code: number;
  name: string;

  constructor(_code: number, _name: string) {
    this.code = _code;
    this.name = _name;
  }
}

const employee1 = new Employee(777, "Teste")
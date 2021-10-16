import { Combinable, Employee, Admin } from "../intersection-types";

/**
 * Type Guards' is just a term that describes the idea or approach of
 * checking if a certain property or method exists before you try to use it.
 * "Descriminated union" is a special type of type guard a pattern which you can use when working with
 *  union types that makes implementing type guards easier. It is available when you use object types.
 */

/**
 * type Combinable = string | number;
 * type Numeric = number | boolean;
 */

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  // without if condition above this would break because a + b isn't supported by combinable
  return a + b;
}

// -- //

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(employee: UnknownEmployee) {
  if ("priviliges" in employee) {
    console.log(employee.priviliges);
  }
  if ("startDate" in employee) console.log(employee.startDate);
}

printEmployeeInfo({
  name: "e1",
  priviliges: ["admin"],
});

// -- //

class Car {
  drive() {
    console.log("Driving a car..");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck..");
  }

  loadCargo() {
    console.log("Loading cargo");
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo();
  }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
  // either of the two solutions to run loadCargo are mentioned above.
}

useVehicle(v1);

// -- //

/* Discriminated unions */

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird": {
      console.log("moving with speed", animal.flyingSpeed);
      break;
    }
    case "horse": {
      console.log("moving with speed", animal.runningSpeed);
    }
  }
}

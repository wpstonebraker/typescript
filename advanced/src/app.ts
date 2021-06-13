type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// these two very similar
interface ElevatedEmployee extends Employee, Admin {}
// type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, 5);
const result2 = add("sup", "dad");
result2.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "max",
  job: { title: "ceo", description: "acde" },
};

console.log(fetchedUserData?.job?.title);

const userInput = null;

// const storedData = userInput || "default value";
const storedData = userInput ?? "default value";

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name); // this is okay because both Employees and Admins have Names
//   //   console.log("Privileges " + emp.privileges); // this doesn't work because Admins dont have
//   if ("privileges" in emp) {
//     console.log("Privileges " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading cargo ..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   //   if ("loadCargo" in vehicle) { // a better way is to do
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(10000);
//   }
// }

// useVehicle(v1);

// interface Bird {
//   flyingSpeed: number;
// }

// interface Horse {
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// // function moveAnimal(animal: Animal) {
// //   console.log("Moving with speed: " + animal);
// // }

// // const paragraph = document.querySelector("p");
// // const paragraph = document.getElementById("message-output");

// const userInput1 = <HTMLInputElement>document.getElementById("user-input");
// const userInput2 = document.getElementById("user-input") as HTMLInputElement;
// userInput1.value = "supdudes";
// userInput2.value = "supdudes";

// interface ErrorContainer {
//   // {email: 'Not a valid email', username: 'Must start with a character'}
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
//   1: "42",
// };

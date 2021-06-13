// const names: Array<string> = []; // string[]

// const promise: Promise<string> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("this is done!");
//   }, 2000);
// });

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "dad" }, { age: 69 });
console.log(merged.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length > 0) {
    descriptionText = `got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(""));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: "dad" }, "name"));

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Dad");
textStorage.addItem("mom");
textStorage.removeItem("Dad");

console.log(textStorage.getItems());

const objStorage = new DataStorage<object>();

objStorage.addItem({ name: "dad" });
objStorage.addItem({ name: "mom" });

objStorage.removeItem({ name: "dad" });
console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
const names: Readonly<string[]> = ["dad", "mom"];
// names.push("arry");

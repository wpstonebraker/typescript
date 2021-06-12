// const person: {
//   name: string;
//   age: number;
// } = {

enum Role {
  ADMIN,
  READ_ONLY,
}
const person = {
  name: "Dad",
  age: 35,
  hobbies: ["vids", "cooking"],
  //   role: [2, "author"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["sports"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

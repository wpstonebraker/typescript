type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(input1: Combinable, input2: Combinable, resultType: string) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  //   return resultType === "as-number" ? +result : result.toString();
  return result;
}

const combinedAges = combine(20, 26, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("20", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

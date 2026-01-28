// default import

// This is default export function
// that can be imported with any name
// export default function(a, b) {
//   return a + b;
// }

//default import

import multiply from "./math_Operation.js";

//named import
import { add, subtract } from "./math_Operation.js";
console.log(multiply(2, 2));
console.log(add(2, 2));

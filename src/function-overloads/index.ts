import { Combinable } from "../intersection-types/index";
/*
Function overload: A feature that allows us to define multiple functions,
signatures, so to say for one at the same function, which simply means we can have multiple possible
ways of calling a function with different parameters
*/

function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  // without if condition above this would break because a + b isn't supported by combinable
  return a + b;
}

const result = add('max', 'imum');


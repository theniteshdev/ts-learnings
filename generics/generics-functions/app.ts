/*
Generics used with-
1. Type Aliases
2. Interfaces
3. Functions
4. Classes
*/

// Here we are talking about Functions
function main(code: number): string {
  if (code == 0) {
    return "No Problem";
  } else {
    return "Something went wrong!";
  }
}
main(0);

function greet<T>(who: T): T {
  return who;
}

const a = greet(45);
console.log(a);

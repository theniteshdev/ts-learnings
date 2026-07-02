type dynamicType<T> = T | string;

const he1: dynamicType<number> = "as";
const he2: dynamicType<number> = 45;

// another example
type createArray<T> = T[];

const myarr1: createArray<number> = [2, 2, 3, 4];
const myarr2: createArray<number | string | boolean> = ["apple", "false"];
const myarr3: createArray<number & string & boolean> = []; // its became never

/*
why never ->
when use <<&>> a.k.a AND operator in JS. Here in TS if we use this operator now it find its intersection 

So, intersection of number, string, boolean = nothing a.k.a never in TS
why? because when intersection means the common types of all type but here no common types so it becames never type😆
*/

type tple<T> = [T];
const myTuple: tple<number> = [4];

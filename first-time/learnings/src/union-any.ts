// Union & Any data types

let age:number | string = "16 years old";
age = 16;

// here both are correct that's why this syntax exists

// union types
const apiStatus: "pending" | "success" | "error" = "pending";

let paidSubs: "Premium" | "Super" | "Super Premium";

paidSubs = "Premium";
// paidSubs = "basic"
// this not allowed

// Any data types means any types of the value can assigned
let user:any = "person";

user = false;
user = {};

// in some case needs to use any data-types
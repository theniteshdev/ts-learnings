// unions
let apiRequestStatus: "pending" | "success" | "error" = "pending";
apiRequestStatus = "success";

let UID: symbol | number = 34;
UID = Symbol("apples");
const orders = [12, 23, 54, 22, 24];

// any
let name; // here name is inferred as any type
name = "sam";
name = 34;

// Type Narrowing

// unknown

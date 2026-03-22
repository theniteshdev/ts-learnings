const myMood: string[] = ["angry", "happy", "sad"];
// this is basic syntax

const earning: number[] = [0, 0, 1, 0];
const requestPerMinutes: Array<number> = [3, 6, 1, 2, 0, 11, 0, 0, 0];

// array objects
type StatusCode = {
  404?: "Page Not Found";
  500?: "Internal Server Error";
};

const requestStatusInfo: Array<StatusCode> = [
  { "404": "Page Not Found" },
  { "500": "Internal Server Error" },
  { "404": "Page Not Found" },
];

// readonly array
const laptopBrands: readonly string[] = ["apple", "acer", "dell", "hp"];
const laptopNames: string[] = ["Acer Aspire", "HP Victus", "Lenevo LEGION"];
laptopNames[1] = "Acer Ntorq";

console.log(laptopNames);
console.log(laptopBrands);
// laptopBrands[3] = "asus"; // this is not allowed

// multiple dimension array
const twoDArray: number[][][] = [
  [[34, 34]],
  [
    [33, 33],
    [1, 2],
  ],
];
console.log(twoDArray);

const another2D: string[][] = [
  ["mango", "apples", "grapes"],
  ["brinjal", "onion", "tomato"],
  ["samosa", "cold-drink", "pani-puri"],
];

// touple and readonly
const userInfo: readonly [string, number, boolean?][] = [
  ["hitesh", 35, false],
  ["anurag", 29, false],
  ["nitesh", 16],
];

console.log(userInfo[0]);

// enums
// enum mood {
//   "angry",
//   "happy",
//   "sad",
//   "curosity",
// }

// best practice
// enum status {
//   DONE,
//   PENDING,
//   ERROR,
// }

enum StatusCodes {
  PAGE_NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  SUCCESSFULLY_CREATED = 201,
  OK = 200,
  BAD_REQUEST = 400,
}

function getStatusInfo(code: StatusCodes) {
  switch (code) {
    case 404:
      console.log("page not found");
      break;
    case 500:
      console.log("internal server error");
      break;
    case 201:
      console.log("successfully created");
      break;
    case 200:
      console.log("reponse ok");
      break;
    case 400:
      console.log("bad request");
  }
}

getStatusInfo(400);

// standard practice

const enum LaptopPrice{
  HP=35000,
  DELL=40000,
  ACER=72000,
  APPLE=120000,
};


// arrays unexpected behaviour
let fruits:[string, number] = ["Apples", 140];
// storing fruits with their price/kg
// fruits.push(45); // this is not allowed

// here its the unexpected
fruits.push("Hmm");
fruits.push(120);
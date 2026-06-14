// forceful type assertion
const id: any = "4f4dw3";

const symbolId: string = (id as string).toWellFormed();
console.log(symbolId);

type Book = {
  bookName: string;
  author: string;
  noOfCopes: number;
  edition: string | number;
};

const myBook: Book = {
  bookName: "OS Concepts",
  edition: "9th",
  author: "Peter Galvin",
  noOfCopes: 2000,
};

console.log(myBook.author);

let anyVal: any;
anyVal = 2.24;
anyVal = "Hello, World!";
if (typeof anyVal == "string") {
  console.log(anyVal.length);
}

let unknownVal: unknown;

unknownVal = 1;
unknownVal = false; // OK
unknownVal = "aplpe";
if (typeof unknownVal == "string") {
  console.log(unknownVal.codePointAt(0));
  // this return the character place point at in the unicode set
}

// work with try and catch

try {
  console.log("Everything is fine!");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

let strData: unknown = "string-data";
const data: string = strData as string; // this is the correct way to use - as keyword

// never

function startServer(): never {
  // setInterval(() => {
  //   console.log("Incoming Request.");
  // }, 1200);
  let status:"pause" | "resume" = "resume";
  setTimeout(() => {
    status = "pause";
  }, 1000);
  while (true) {
    const date = new Date();
    if (status == "resume") {
      console.log("Incoming Request!");
    }
  };

};

startServer();

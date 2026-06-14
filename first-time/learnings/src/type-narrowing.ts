// types guards are also a good programming practice

function sendBillToMail(price: number | string): boolean {
  if (typeof price == "string") {
    console.log(price.toLowerCase());
  }
  if (typeof price == "number") {
    console.log(price.toFixed(2));
  }
  return true;
}

function useKeyboard(
  keyboardType:
    | "Mechanical Keyboards"
    | "Membrane Keyboards"
    | "Backlit Keyboards",
): string {
  if (keyboardType == "Mechanical Keyboards") {
    return "Nice you are cool.";
  }
  if (keyboardType == "Membrane Keyboards") {
    return "You are professional";
  }
  if (keyboardType == "Backlit Keyboards") {
    return "Late night developer, great!.";
  }
  return "Please choose keyboard between provided menu.";
}

// type

type User = {
  username: string;
  age: number;
  isAdmin: boolean;
  subsType: "Super" | "Premium" | "Super Premium";
};

function isUser(user: User): boolean {
  const { username, age, isAdmin, subsType } = user;
  if (!username || !age || !isAdmin || !subsType) {
    return false;
  }
  if (
    (typeof username == "string" &&
      typeof age == "number" &&
      typeof isAdmin == "boolean" &&
      subsType == "Super") ||
    "Premium" ||
    "Super Premium"
  ) {
    return true;
  } else {
    return false;
  }
}

let isUserORnot = isUser({
  username: "nitesh",
  age: 34,
  isAdmin: false,
  subsType: "Premium",
});

console.log(isUserORnot);

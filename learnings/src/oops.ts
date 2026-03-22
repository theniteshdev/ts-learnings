class Computer {
  public brand: string;
  public os: string;
  public ram: number;
  public rom: number;
  public price: number;
  private costPrice: number = 0;

  constructor(
    brand: string,
    os: string,
    ram: number,
    rom: number,
    price: number,
  ) {
    this.brand = brand;
    this.os = os;
    this.ram = ram;
    this.rom = rom;
    this.price = price;
    console.log(this);
    console.log(this.costPrice);
  }

  setCostPrice(price: number) {
    this.costPrice = price;
  }
}

const myLaptop = new Computer("apple", "macos", 16, 256, 45999);
myLaptop.setCostPrice(4545);

// # syntax
class Wallet {
  #balance = 1200;
  getBalance(amount: number) {
    this.#balance = amount;
  }
  constructor() {
    console.log("Welcome to the Wallet !!");
  }
}

// control get and set

/* set not have return annotatation */
class Bank {
  private _balance: number = 0;
  readonly accountNumber: number | string;

  constructor(acNumber: number | string, initialBalance: number) {
    this.accountNumber = acNumber;
    this._balance = initialBalance;
  }

  get viewBankBalance(): number {
    return this._balance;
  }

  set addBalance(amount: number) {
    if (amount <= 0) {
      console.log("Please enter valid amount.");
    } else {
      this._balance += amount;
    }
    console.log("Something went wrong !!");
  }
}
// while creating a private property best practice is its identifiers starts with _ (best practice)

// static
class Book {
  static publication: string = "SuperBooks";
  private totoalIncome: number = 0;
  public bookName: string;
  public price: number;
  constructor(bName: string, price: number) {
    this.bookName = bName;
    this.price = price;

    this.totoalIncome += this.price;
    console.log(`Total Income till now: ${this.totoalIncome}`);
  };
};
// just learning purpose classes
const osBook = new Book("OS Concepts", 650);
const osBook2 = new Book("OS Concepts 9th Edition", 650);
console.log(osBook.price);
console.log(osBook2.price);
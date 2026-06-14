// interface

type MakeLaptop = {
  brand: string;
  ram: number;
  rom: number;
  storageType: "SSD" | "HHD";
};

class Laptop implements MakeLaptop {
  brand = "apple";
  ram = 32;
  rom = 512;
  storageType: "SSD" | "HHD" = "SSD";
}

interface MakePC {
  ram: 8 | 16 | 32 | 64;
  rom: 256 | 512 | 1024;
  band: "acer" | "apple" | "dell";
}

class PCMaker implements MakePC {
  ram: 8 | 16 | 32 | 64 = 8;
  rom: 256 | 512 | 1024 = 256;
  band: "acer" | "apple" | "dell" = "apple";
}

type PC = { os: "lynux" | "macos" };
type Monitor = {
  monitorBrand: "acer" | "dell" | "samsung";
  refreshRate: string;
};

type CompletePC = PC & Monitor;

const myPc: CompletePC = {
  monitorBrand: "acer",
  os: "lynux",
  refreshRate: "120hz",
};

// optional
type UserType = {
  username: string;
  userId: number | string | symbol;
  website: string;
  isPro?: boolean; // this is optional
};

const user1: UserType = {
  userId: 33,
  username: "ar24",
  website: "ar24.com",
};

console.log(user1.userId);

// literal type
type emailProvider = "gmail" | "proton" | "yahoo";
type Email = { body: string; provider: emailProvider };

const myEmail: Email = {
  body: "nites.dev",
  provider: "proton",
};

console.log(myEmail.body);
console.log(myEmail.provider);

// objects in ts

const user = {
  username: "nitesh.dev",
  email: "nitesh.dev@proton.me",
  password: "password@33",
};

let User: {
  username: string;
  email: string;
  isAdmin: boolean;
  password: string;
};

User = {
  email: "nitesh",
  isAdmin: false,
  password: "pss",
  username: "nitesj..",
};

type User2 = {
  name: string;
};

console.log(typeof User);
console.log(typeof user);

type Item = { name: string; quantity: number };
type Address = { street: string; pincode: number };

type Order = {
  items: Item[];
  address: Address;
};

// partial keyword makes all the field optional
type AdminUser = {
  name: string;
  role: "admin" | "super-admin";
  lastLogin: {
    date: {
      day: number;
      month: number;
      year: number;
    };
    time: {
      hour: number;
      minutes: number;
      seconds: number;
    };
  };
};

let admin1: AdminUser = {
  lastLogin: {
    date: {
      day: 3,
      month: 7,
      year: 2024,
    },
    time: {
      hour: 18,
      minutes: 5,
      seconds: 52,
    },
  },
  name: "nitesh",
  role: "super-admin",
};

// now some-details are updated
const updatedAdminDetails: Partial<AdminUser> = {
  name: "nitesh-kumar",
};

admin1 = { ...admin1, ...updatedAdminDetails };
console.log(admin1); // i got the updated credancials

// make required
type PremiumUser = {
  username?: string;
  phoneno?: number;
  email: string;
};

const premiumUser1: Required<PremiumUser> = {
  email: "hurr",
  phoneno: 4544,
  username: "hife",
};
// here all the fields are required

// pick keyword - picking a specific fields
const premiumUser2: Pick<PremiumUser, "phoneno" | "email"> = {
  email: "nites.dev@gmail.com",
  phoneno: 45222222,
};
const premiumUser3: Pick<PremiumUser, "email"> = {
  email: "aok",
};



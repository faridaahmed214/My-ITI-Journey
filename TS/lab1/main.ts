interface User {
  name: string;
  age: number;
}

const justName: Pick<User, "name"> = {
  name: "Farida"
};

interface Profile {
  username?: string;
  email?: string;
}

const fullProfile: Required<Profile> = {
  username: "farida_ahmed",
  email: "farida@example.com"
};

const hexCodes: Record<"red" | "green" | "blue", string> = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF"
};

console.log(hexCodes.red);

interface Person {
  name: string;
  age: number;
  email: string;
}

type BasicInfo = Pick<Person, "name" | "email">;

const userBasic: BasicInfo = {
  name: "Farida Ahmed",
  email: "farida@iti.gov.eg"
};

type UserNoAge = Omit<Person, "age">;

const user2: UserNoAge = {
  name: "Nour Allah",
  email: "nour@example.com"
};

type Colors = "red" | "green" | "blue" | "yellow";

type PrimaryColors = Exclude<Colors, "yellow">;

let myColor: PrimaryColors = "blue"; 
myColor = "yellow"; 

type Selection = Extract<Colors, "red" | "blue">;

let pickedColor: Selection = "red";
pickedColor = "blue";
pickedColor = "green"; 

type NullableString = string | null | undefined;

type SafeString = NonNullable<NullableString>;

let finalValue: SafeString = "yyy";
finalValue = null;
finalValue = undefined; 
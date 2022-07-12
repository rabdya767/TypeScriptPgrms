/* eslint-disable @typescript-eslint/no-unused-vars */
interface animalInterface {
    live(): void;
}

interface dogInterface extends animalInterface {
    woo(): void;
}

interface catInterface {
    meu(): void;
}

//SomeType extends OtherType ? TrueType : FalseType;
type conditionalType1 = dogInterface extends animalInterface ? number : string;
// conditionalType1 is number here

type conditionalType2 = catInterface extends animalInterface ? number : string;
// conditionalType2 is string here

/**
 * function overload
 */
interface idLabel {
    id: number;
}

interface nameLabel {
    name: string;
}

function createLabel(id: number): idLabel;
function createLabel(name: string): nameLabel;
function createLabel(nameOrId: string | number): idLabel | nameLabel;
function createLabel(nameOrId: string | number): idLabel | nameLabel {
    throw `${nameOrId} is unimplemented`;
}
console.log(createLabel("hello"));

type NmOrId<T extends number | string> = T extends number ? idLabel : nameLabel;
function createLabel1<T extends number | string>(idOrName: T): NmOrId<T> {
    throw idOrName + " Using Conditional Type ";
}

const a1 = createLabel1("TypeScript!");//a is nameLabel Type
const b1 = createLabel1(2.8);//b is idLabel Type
const c1 = createLabel1(Math.random() ? "hello" : 42);
//c is nameLabel|idLabel Type

type messageOf<T> = T extends { message : unknown }? T["message"]:never;

interface emailInterface {
    message : string;
}

interface dogInterface1{
    bark() : void;
}

type emailMessageContents = messageOf<emailInterface>;
// emailMessageContents is contains "message" property so it is "string"
type dogMessageContents = messageOf<dogInterface1>
// "message" property isn't available in dogMessageContents 
// so by default we mentioning "never" type


# OOPS in TYPESCRIPT

Object-Oriented Programming (OOP) is a programming paradigm that focuses on the use of objects to solve problems. OOP is based on four main concepts: Encapsulation, Inheritance, Polymorphism, and Abstraction. Here's a brief explanation of each concept with some real-life examples:

# Encapsulation

Encapsulation is the concept of grouping related data and functions into a single unit (class) and restricting access to the data from outside the class. This helps to ensure that the data is not accidentally or intentionally modified by external code.

### Real-life example

A bank account can be seen as an encapsulated object, where the account balance is the private data and the deposit and withdrawal methods are the public functions. The account balance cannot be accessed or modified directly from outside the account object.

```typescript

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number) {
    this.balance += amount;
  }

  public withdraw(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
    }
  }

  public getBalance() {
    return this.balance;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getBalance()); // Output: 1300

```

In this example, the `balance` property is private, and the `deposit`, `withdraw`, and `getBalance` methods are public. The private `balance` property can only be accessed or modified from within the `BankAccount` class.

# Inheritance

Inheritance is the concept of creating a new class (subclass) from an existing class (superclass) and inheriting the properties and methods of the superclass. The subclass can also add new properties and methods or override the existing ones.

### Real-life example

A vehicle can be seen as a superclass, and a car and a bike can be seen as subclasses that inherit from the vehicle class. The vehicle class may have properties such as speed and color, and methods such as accelerate and brake. The car and bike subclasses may add their own properties such as number of doors or wheels, and methods such as shift gears.

```typescript

class Vehicle {
  protected speed: number;
  protected color: string;

  constructor(speed: number, color: string) {
    this.speed = speed;
    this.color = color;
  }

  public accelerate() {
    this.speed += 10;
  }

  public brake() {
    this.speed -= 10;
  }
}

class Car extends Vehicle {
  private numDoors: number;

  constructor(speed: number, color: string, numDoors: number) {
    super(speed, color);
    this.numDoors = numDoors;
  }

  public honk() {
    console.log("Beep beep!");
  }
}

const myCar = new Car(50, "red", 4);
myCar.accelerate();
myCar.honk();
console.log(myCar.speed); // Output: 60

```
In this example, the `Vehicle` class is the superclass, and the `Car` class is the subclass that extends the `Vehicle` class. The `Car` class adds a new property `numDoors` and a new method `honk`. The `Car` class inherits the `accelerate` and `brake` methods from the `Vehicle` class.

# Polymorphism

Polymorphism is the concept of using a single interface to represent multiple types of objects. In object-oriented programming, this is achieved through inheritance, where a subclass can be treated as a superclass. This allows different objects to be used interchangeably in the same context, as long as they implement the same methods or have the same properties.

### Real-life example

An example of polymorphism in real life can be seen in the use of the "play" method. Different types of musical instruments, such as a guitar, piano, or drums, can all have a "play" method. While the implementation of the method may differ for each instrument, they can all be treated as musical instruments and can be played in the same context, such as in a band or orchestra.

```typescript

class Shape {
  protected area: number;

  constructor() {
    this.area = 0;
  }

  public getArea(): number {
    return this.area;
  }
}

class Square extends Shape {
  private side: number;

  constructor(side: number) {
    super();
    this.side = side;
    this.area = this.side * this.side;
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
    this.area = Math.PI * this.radius * this.radius;
  }
}

function printArea(shape: Shape) {
  console.log(`Area of the shape: ${shape.getArea()}`);
}

const square = new Square(5);
const circle = new Circle(2);

printArea(square); // Output: Area of the shape: 25
printArea(circle); // Output: Area of the shape: 12.566370614359172

```

In this example, the `Shape` class is the superclass, and the `Square` and `Circle` classes are the subclasses that inherit from the `Shape` class. The `Shape` class has a method `getArea`, which is implemented differently by each subclass. The `printArea` function takes an object of type `Shape` as a parameter and calls the `getArea` method, which is implemented differently depending on the type of shape.

# Abstraction

Abstraction is the process of hiding the implementation details of an object and showing only the necessary information to the user. In object-oriented programming, this is achieved through abstract classes and interfaces, which define the properties and methods that a class must implement, without specifying how they are implemented.

### Real-life example

An example of abstraction in real life can be seen in the use of a remote control for a television. The remote control provides a simplified interface for the user to interact with the television, without exposing the internal workings of the television. The user can turn the television on or off, change the channel, or adjust the volume, without having to understand the complex electronics inside the television.

```typescript

abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public abstract makeSound(): void;
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  public makeSound(): void {
    console.log(`${this.name} meows.`);
  }
}

function animalSounds(animals: Animal[]): void {
  animals.forEach(animal => {
    animal.makeSound();
  });
}

const myDog = new Dog("Buddy");
const myCat = new Cat("Fluffy");
const animalList: Animal[] = [myDog, myCat];
animalSounds(animalList); // Output: Buddy barks. Fluffy meows.

```

In this example, the `Animal` class is an abstract class that defines a property `name` and an abstract method `makeSound`. The `Dog` and `Cat` classes are the concrete implementations of the `Animal` class, which implement the `makeSound` method differently. The `animalSounds` function takes an array of `Animal` objects as a parameter and calls the `makeSound` method on each object, without knowing the specific implementation details of each animal.

## Authors

- [@rabdya767](https://github.com/rabdya767)

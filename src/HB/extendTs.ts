interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: number;
}

interface Unit {
    unit: number;
}

interface BasicAddressWithUnit extends Unit, BasicAddress { }

const address: BasicAddressWithUnit = {
    name: "Osmania University",
    street: "Tarnaka",
    city: "Hyderabad",
    country: "India",
    postalCode: 500007,
    unit: 10
};

console.log(`Address is ${Object.values(address)}`);

interface ColorFul {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorFulCircle = ColorFul & Circle;

// function draw(circle : ColorFul & Circle){
function draw(circle: ColorFulCircle): void {
    console.log(`Color is ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}

draw({ color: "RED", radius: 42 });
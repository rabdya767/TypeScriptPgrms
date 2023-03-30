class Vehicle {
    public model: string;
    public color: string;
    public isElectric: boolean;

    constructor(model: string, color: string, isElectric: boolean) {
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
    }

    public drive(): void {
        const engineStarted: boolean = this.startEngine();

        // some method to drive after starting the engine
        if (engineStarted) {
            console.log("Engine Started Succesfully!");
        } else {
            console.log("Engine is not started");
        }
    }

    public startEngine(): boolean {
        //Some method to start engine
        return true;
    }
}

const v1: Vehicle = new Vehicle("YAMAHA", "BLUE", false);
v1.drive();
console.log(v1.startEngine());
class SetterGetter {

    size1 = 0;

    get size(): number {
        return this.size1;
    }

    set size(value: string | number | boolean) {
        const num = Number(value);

        if (!Number.isFinite(num)) {
            this.size1 = 0;
            return;
        }
        this.size1 = num;
    }

}

console.log("Size is ", new SetterGetter().size);

class mySafe {
    //private variables have _ in front of them
    private _secreteKey = "412814";
    //Static
    static x = 70;
    static printX(): void {
        console.log("Static  value is ", mySafe.x);
    }

}

const obj = new mySafe();
//Not allowed during type checking
// console.log(obj._secreteKey);
//OK
console.log("Secret Key is ", obj["_secreteKey"]);
mySafe.printX();
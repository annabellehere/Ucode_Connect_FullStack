class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
        ].join('\n');
    }
};

class Tower extends Building {
    #hasElevator;
    #arcCapacity;
    #height;

    constructor(floors, material, address, hasElevator = false, arcCapacity = 0, height = 0) {
        super(floors, material, address);
        this.#hasElevator = hasElevator;
        this.#arcCapacity = arcCapacity;
        this.#height = height;
    }

    get hasElevator() {
        return this.elev;
    }

    set hasElevator(value) {
        if (value == true) {
            this.elev = '+';
        }
        else if (value == false) {
            this.elev = '-';
        }
    }

    get arcCapacity() {
        return this.#arcCapacity;
    }

    set arcCapacity(value) {
        this.#arcCapacity = value;
    }

    get height() {
        return this.#height;
    }

    set height(value) {
        this.#height = value;
    }

    toString() {
        return [
            super.toString(),
            `Elevator: ${this.hasElevator}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.height / this.floors}`
        ].join('\n');

    }
}


/*const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
starkTower.hasElevator = true;
starkTower.arcCapacity = 70;
starkTower.height = 1130;
console.log(starkTower.toString());*/
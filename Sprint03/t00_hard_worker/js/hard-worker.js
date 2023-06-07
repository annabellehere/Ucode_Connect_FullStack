class HardWorker {
    name;
    #age;
    #salary;
    
    constructor(name, age, salary) {
        this.name = name;
        this.#age = age;
        this.#salary = salary;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        if(value >= 1 && value < 100) {
            this.#age = value;
        }
    }

    get salary() {
        return this.#salary;
    }
    
    set salary(value) {
        if(value >= 100 && value <= 10000) {
            this.#salary = value;
        }
    }

    toObject() {
        return {
            name: this.name,
            age: this.#age,
            salary: this.#salary
        }
    }
}

/*
worker = new HardWorker;

worker.name = 'Bruce';
console.log(worker.name);

worker.age = 50;
worker.salary = 1500;
console.log(worker.toObject());

worker.name = 'Linda';
worker.age = 140;
console.log(worker.toObject());*/

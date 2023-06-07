let houseBlueprint = {
    address: this.address,
    date: new Date(),
    description: this.description,
    owner: this.owner,
    size: this.size,
    _averageBuildSpeed: 0.5,
    getDaysToBuild() {
        return this.size / this._averageBuildSpeed;
    }
};

function HouseBuilder(address, description, owner, size, roomCount){
    const housebuilder = Object.create(houseBlueprint);
    housebuilder.address = address;
    housebuilder.description = description;
    housebuilder.owner = owner;
    housebuilder.size = size;
    housebuilder.roomCount = roomCount;
    return housebuilder;
}

/*const house = new HouseBuilder('88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J. Smith',
    110,
    5);

console.log(house.address);
// '88 Crescent Avenue'

console.log(house.description);
// 'Spacious town house with wood flooring, 2-car garage, and a back patio.'

console.log(house.size);
// 110

console.log(house.date.toDateString());
// [the current date], for example: 'Tue Aug 11 2020'

console.log(house.owner);
// J. Smith

console.log(house._averageBuildSpeed);
// 0.5

console.log(house.getDaysToBuild());
// 220

console.log(house.roomCount);
// 5
*/

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


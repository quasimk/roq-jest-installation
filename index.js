class Rabbit{
    constructor(name, strength, pace, hungerLevel){
        this.name = name;
        this.feet = 4;
        this.tail= true;
        this.strength = strength;
        this.pace = pace;
        this.hungerLevel = hungerLevel;
        //* specified that every rabbit is going to have 4 feet and a tail
        //*this.name = name is leaving name blank. this is for the user to specify when creating rabbit.

    }
    //* increase methods section
    train() {
        this.strength++;
        this.hungerLevel += 10;
    }
}

const betty = new Rabbit('Betty', 87, 93, 0)

const marcus = new Rabbit('Marcus', 100, 5, 99)



module.export = {
    Rabbit,
    betty,
    marcus
}
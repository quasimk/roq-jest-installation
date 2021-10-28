class Person {
    constructor(name, age, favouriteFilm, favouriteArtist, favouriteColor){
        this.name = name;
        this.age = age;
        this.location= 'Chorley';
        this.company = 'ROQ';
        this.favouriteFilm = favouriteFilm;
        this.favouriteArtist = favouriteArtist;
        this.favouriteColor = favouriteColor;

        //* specified that every rabbit is going to have 4 feet and a tail
        //*this.name = name is leaving name blank. this is for the user to specify when creating rabbit.

    }
    //* increase methods section
    sing () {
     console.log("I am Singing")

    }

    dance() {
        console.log("I am dancing")

    }

    test() {
        console.log("I am Testing something")

    }
}

const qas = new Person('Qas', 25, 'Chorley', 'ROQ', 'Shrek', 'Hannah Montanna', 'Blue')

console.log(qas)

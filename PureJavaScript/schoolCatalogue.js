class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set newNumberOfStudents(newVal){
        if (typeof newVal === ('Number')){
            this._numberOfStudents = newVal;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        console.log(substituteTeachers[Math.floor(Math.random() * substituteTeachers.length-1)])
    }
}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'Primary', numberOfStudents)
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name, numberOfStudents){
        super(name, 'Middle', numberOfStudents);
    }
}

class High extends School {
    constructor(name, numberOfStudents, sportsTeam){
        super(name, 'High', numberOfStudents);
        this._sportsTeam = sportsTeam;
    }

    get sportsTeam() {
        return this._sportsTeam;
    }
}

/// Primary School
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

/// High School
const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeam);

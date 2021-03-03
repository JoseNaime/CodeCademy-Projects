class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = []
    }

    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut
    }

    getAverageRating(){
        const sum = this._ratings.reduce((a,b) => a+b)
        return Math.round(sum/this._ratings.length,4);
    }

    addRating(newRating){
        this._ratings.push(newRating);
    }
}

class Book extends Media {
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get ages(){
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director(){
        return this._director;
    }

    get runTime(){
        return this._runTime;
    }
}

/// Create Book
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

// Toogle check out
historyOfEverything.toggleCheckOutStatus();

// Add rating to books
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// Get average
console.log(historyOfEverything.getAverageRating());
// Check is checked out
console.log(historyOfEverything.isCheckedOut);



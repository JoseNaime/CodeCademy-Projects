const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field
        this._gameStatus = 'STARTED'
        this._inGame = true;
        this._currentPos = [0, 0]
        this._boundaries = [[0, 0], [this._field[0].length - 1, this._field.length - 1]]

    }

    static generateField(width, height, percentage) {
        let field = [];

        let amountOfHoles = Math.floor((width*height)*(percentage/100))

        for (let i = 0; i < height; i++) {
            let line = []
            for (let j = 0; j < width; j++) {
                line.push('░')
            }
            field.push(line)
        }

        for (amountOfHoles; amountOfHoles > 0; amountOfHoles--) {
            const randX = Math.floor(Math.random() * width);
            const randY = Math.floor(Math.random() * height);

            field[randY][randX] = 'O'
        }

        // Set start
        field[0][0] = '*';

        // Set end
        field[height - 1][Math.floor(Math.random() * (width))] = '^'

        return field;
    }

    print() {
        this._field.forEach(val => {
            console.log(val.join(''))
        })
    }

    handleUserInput() {
        const dir = prompt('Which way? ').toUpperCase();
        switch (dir) {
            case('W'):
                this.move(0, -1);
                break;
            case('A'):
                this.move(-1, 0);
                break;
            case('S'):
                this.move(0, 1);
                break;
            case('D'):
                this.move(1, 0);
                break;
        }
    }

    move(x, y) {

        this._currentPos = [this._currentPos[0] + y, this._currentPos[1] + x];
        /// Check if move is available

        // Out of Field
        if ((this._currentPos[0] < this._boundaries[0][0] || this._currentPos[1] < this._boundaries[0][1]) || (this._currentPos[1] > this._boundaries[1][0] || this._currentPos[0] > this._boundaries[1][1])) {
            this._gameStatus = 'BOUNDARY'
        } else if (this._field[this._currentPos[0]][this._currentPos[1]] === 'O') {
            this._gameStatus = 'HOLE'
        } else if (this._field[this._currentPos[0]][this._currentPos[1]] === '^') {
            this._gameStatus = 'WIN'
        } else {

            // Change current location to *
            this._field[this._currentPos[0]][this._currentPos[1]] = '*'
        }

        this._inGame = this._gameStatus === 'STARTED'
    }

    finalPrint() {
        this.print()
        let message = '';
        switch (this._gameStatus) {
            case('BOUNDARY'):
                message = 'LOSE You are out of boundaries'
                break;
            case('HOLE'):
                message = 'LOSE You felt into a hole !!'
                break;
            case('WIN'):
                message = 'WIN ¡¡ You found your hat !!'
                break;
        }
        console.log(message)
    }
}

const myField = new Field(Field.generateField(15, 10, 35));
console.clear(); // Clear screen

while (myField._inGame) {
    myField.print();
    myField.handleUserInput();
    console.clear(); // Clear screen
}

myField.finalPrint();

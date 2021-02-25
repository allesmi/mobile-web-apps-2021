/**
 * A class for data structures that contain a list internally.
 */
class List {
    constructor(name, seperator) {
        this._name = name;

        if (seperator === undefined) {
            this._seperator = ', ';
        }
        else {
            this._seperator = seperator;
        }

        this._list = [];
    }

    toString() {
        return this._name + ': ' + this._list.join(this._seperator);
    }
}

class Queue extends List {
    constructor(name, seperator) {
        super(name + '-Queue', seperator);
    }

    enqueue(element) {
        this._list.push(element);
    }

    dequeue() {
        return this._list.shift();
    }

    /**
     * @returns Returns the name and content of this queue.
     */
    toString() {
        return super.toString();
    }
}

class Stack extends List {
    constructor(name, seperator) {
        super(name, seperator);
    }

    push(element) {
        this._list.push(element);
    }

    pop() {
        return this._list.pop();
    }

    toString() {
        return super.toString();
    }
}

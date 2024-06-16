// enqueue pushes an item to the end of a queue
// dequeue removes and returns the element in the front of the queue

function Queue() {
    let collection = [];

    this.print = () => {
        console.log(collection);
    }

    this.enqueue = (val) => {
        collection.push(val);
    }

    this.dequeue = () => {
        if (collection.length != 0) {
            return collection.shift();
        }
        return "Can't remove queue items from an empty queue";
    }

    this.front = () => {
        if (collection.length != 0) {
            return collection[0];
        }

        return "The queue is empty :(";
    }

    this.size = () => {
        return collection.length;
    }

    this.isEmpty = () => {
        return collection.length == 0;
    }
}

let test = new Queue();
test.print();
console.log(test.dequeue());
test.enqueue(4);
test.enqueue(7);
test.print();
test.dequeue();
test.print();
test.dequeue();
test.print();
console.log(test.front());
test.enqueue(999);
console.log(test.front());
console.log(test.size());
console.log(test.isEmpty());
test.dequeue();
console.log(test.isEmpty());
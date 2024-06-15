// starter code
function Stack() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };

    // my code
    this.push = (val) => {
        collection.push(val);
    }

    this.pop = () => {
        return collection.pop();
    }

    this.peek = () => {
        return collection[collection.length - 1];
    }

    this.isEmpty = () => {
        return collection.length == 0;
    }

    this.clear = () => {
        collection = [];
    }
}

const test = new Stack();
console.log(test.isEmpty())
test.push("Hey there!!!");
test.push("I'm a stack!!!");
test.push(9999);
console.log(test.isEmpty())
test.print();
console.log(test.pop());
test.print()
test.clear()
test.push("I've been cleared :(");
test.print()
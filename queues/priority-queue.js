function PriorityQueue () {
    this.collection = [];

    this.printCollection = function() {
      console.log(this.collection);
    };

    this.enqueue = (item) => {
        // items entered as follows -> ["Item Value (any type)", "Priority (in this case an int"]
        // ["cat", 1] takes priority over ["cat" 2]

        // if the queue is empty we can add the item without checking anything
        if (this.collection.length == 0) {
            this.collection.push(item);
            return
        }

        if (item[1] >= this.collection[this.collection.length-1][1]) {
            this.collection.push(item);
            return
        }
        
        // check item priority
        for (let i = this.collection.length - 1; i >= 0; i--) {
            if (item[1] >= this.collection[i][1]) {
                this.collection.splice(i+1, 0, item);
                return
            }
        }
    }
    
    this.size = () => {
        return this.collection.length
    }

    this.isEmpty = () => {
        return this.collection.size() == 0;
    }

    this.front = () => {
        if (this.isEmpty() == false) {
            return this.collection[0];
        }

        return "Error! Can't return the front of an empty PriorityQueue";
    }
  }

const test = new PriorityQueue();
test.enqueue(["Dog", 2]);
test.printCollection()
test.enqueue(["Cat", 3]);
test.printCollection();
test.enqueue(["Bird", 5]);
test.printCollection();
test.enqueue(["Human", 4]);
test.printCollection();
test.enqueue(["Penguin", 1]);
test.printCollection();
test.enqueue(["Turtle", 1]);
test.enqueue(["Salamander", 4]);
test.printCollection();
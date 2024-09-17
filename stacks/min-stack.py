""" 
    Design a stack that supports the following...

    push(x) -> None; pushes x onto the stack
    top() -> sees the top element (assuming it exists) and returns it
    pop() -> x; removes the top element and returns it 
    getMin() -> x; returns the min value of the stack
 """

class Stack:
    def __init__(self) -> None:
        self.stack = []
        self.min = None
    
    def push(self, x):
        self.stack.append(x)

        if self.min:
            if x < self.min:
                self.min = x
        else:
            self.min = x

    def pop(self):
        if self.stack:
            return self.stack.pop()
        else:
            return "Can't perform the pop operation on an empty stack!!!"

    def top(self):
        return self.stack[-1]
    
    def getMin(self):
        if self.stack:
            return self.min
        
    def print_stack(self):
        print(self.stack)

test_stack = Stack()

test_stack.push(9)
test_stack.print_stack()
test_stack.push(4)
test_stack.print_stack()
test_stack.push(99)
test_stack.print_stack()
print(test_stack.getMin)
print(test_stack.pop())

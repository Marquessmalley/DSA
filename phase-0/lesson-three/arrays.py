# Arrays are a data structure that store a collection of elements. This is also known as a list in Python.

# Key characteristics
#  Ordered 
#  Indexed (Starts at 0)
# Fast access to elements by index

numbers = [1,2,3,4,5]

# Accessing elements by index - Constant time O(1)
print(numbers[0]) 
print(numbers[1])

# Iterating through the array - Linear time O(n)
# n elements → n operations
for num in numbers:
    print(num)


# Updating an element - Constant time O(1)
    numbers[0] = 100


# Searching for an element - Linear time O(n)
target = 3
for num in numbers:
    if(num == target):
        print("Found 3")


# Adding an element - Linear time O(n)
numbers.append(6)


# Inserting an element - Linear time O(n)
numbers.insert(2, 0)


# Removing an element - Linear time O(n)
numbers.pop(0)

for num in numbers:
    print(num)
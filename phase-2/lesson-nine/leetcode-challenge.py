"""
Problem: Find Index in Linked List

Problem Statement:
    Given the head of a linked list and a target value,
    return the index of the target. Return -1 if it does not exist.

Function Signature:
    def find_index(head, target) -> int

Example:
    List: 10 → 20 → 30 → 40 → None

    find_index(head, 30)   # Output: 2
    find_index(head, 99)   # Output: -1

Key Insight:
    You must count while traversing

Expected Complexity:
    Time: O(n)
    Space: O(1)
"""


# Node Class
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


# Function Signature
def find_index(head, target):
    current = head
    index = 0

    while current:
        if current.value == target:
            return index
        index += 1
        current = current.next
    return -1


# Create the nodes
a = Node(10)
b = Node(20)
c = Node(30)
d = Node(40)

# Link the nodes together
a.next = b
b.next = c
c.next = d
d.next = None

# Test the function
print(find_index(a, 30))

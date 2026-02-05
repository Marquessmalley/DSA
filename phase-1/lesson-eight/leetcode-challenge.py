# Phase 1 – Lesson 8: LeetCode Challenge
# Problem: Search in a Linked List

# Given the head of a singly linked list and a target value,
# return True if the value exists in the list, otherwise return False.

# Key Insight:
# - You must traverse the entire list
# - No shortcuts (unlike binary search on arrays)
# - Time: O(n)
# - Space: O(1)

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


# Function Signature
def search_linked_list(head, target):
    current = head
    while current:
        if(current.value == target):
            return True
        current = current.next
    return False

# Example Usage
# Build list: 5 -> 12 -> 8 -> 3 -> None
a = Node(5)
b = Node(12)
c = Node(8)
d = Node(3)
a.next = b
b.next = c
c.next = d

# Test cases
print(search_linked_list(a, 8))  # Expected: True
print(search_linked_list(a, 99)) # Expected: False

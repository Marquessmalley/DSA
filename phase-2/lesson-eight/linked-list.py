# Phase 1 – Lesson 8: Linked Lists

# A linked list is a data structure that consists of a sequence of nodes. Each node contains a value and a reference to the next node in the sequence.

# Createa Node Class
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __str__(self):
        return str(self.value)

# Creating Nodes
a = Node(1)
b = Node(2)
c = Node(3)



# Linking Nodes 
a.next = b
b.next = c
c.next = None

# Traversing the Linked List

def print_list(head):
    current = head
    while current:
        print(current.value)
        current = current.next

print_list(a)

# Inserting a Node at the beginning of the Linked List
print("Inserting a Node at the beginning of the Linked List")
head = a  # Set head to the first node

new_node = Node(99)
new_node.next = head  # Point new node to the old head
head = new_node       # Update head to the new node
print_list(head) # 99 -> 1 -> 2 -> 3

# Inserting a Node in a Linked List
print("Inserting a Node in a Linked List")
another_node = Node(50)
another_node.next = a.next # 50 -> 2
a.next = another_node # 1 -> 50
print_list(head) #99 -> 1 -> 50 -> 2 -> 3


# deleting a Node in a Linked List
print("Deleting a Node in a Linked List")
a.next = a.next.next # 1 -> 3
print_list(head) #99 -> 1 -> 3

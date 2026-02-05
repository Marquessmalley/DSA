# Phase 1 – Lesson 8: Linked Lists — Why They Exist

> Arrays are great for reading. Linked lists are great for writing.

---

## 1. The Problem with Arrays

From Lesson 6, we learned:

- Inserting into a sorted array → **O(n)**
- Deleting from a sorted array → **O(n)**

Why? Because elements must shift.

**What if we could insert and delete without shifting?**

---

## 2. What Is a Linked List?

A linked list is a sequence of **nodes** where each node contains:

1. **Data** — the value
2. **Pointer** — reference to the next node

```
[5] → [12] → [8] → [3] → None
```

Unlike arrays, nodes are **not stored contiguously** in memory.

---

## 3. Why This Matters

**Arrays:**
- Elements live side-by-side
- Inserting means shifting everything after

**Linked Lists:**
- Elements can live anywhere in memory
- Inserting means updating pointers

> 👉 No shifting required!

---

## 4. Linked List Node (Code)

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
```

That's it. A node holds a value and points to the next node.

---

## 5. Building a Simple Linked List

```python
# Create nodes
a = Node(5)
b = Node(12)
c = Node(8)

# Link them
a.next = b
b.next = c

# Result: 5 → 12 → 8 → None
```

---

## 6. Traversing a Linked List

```python
def print_list(head):
    current = head
    while current:
        print(current.value)
        current = current.next
```

**How it works:**

- `current = head` — Start at the first node
- `while current:` — Keep going until we hit `None` (the end)
- `current = current.next` — Move to the next node

Think of it like walking through a chain — start at the first link, follow the pointer to the next, repeat until there's no next link.

| | Complexity |
|---|---|
| **Time** | O(n) |
| **Space** | O(1) |

---

## 7. Insertion — The Big Win

To insert `99` after node `a` (which holds `5`):

```python
new_node = Node(99)
new_node.next = a.next  # Step 1: new_node points to what a pointed to (12)
a.next = new_node       # Step 2: a now points to new_node
```

Before: `5 → 12 → 8`

After: `5 → 99 → 12 → 8`

**Why this order?** We must save the reference to `12` before overwriting `a.next`. If reversed, we'd lose the rest of the chain!

| | Complexity |
|---|---|
| **Time** | O(1) — just pointer updates |
| **Space** | O(1) |

**No shifting!**

---

## 8. Deletion — Also Fast

To delete the node after `a`:

```python
a.next = a.next.next
```

Before: `5 → 99 → 12 → 8`

After: `5 → 12 → 8`

| | Complexity |
|---|---|
| **Time** | O(1) |
| **Space** | O(1) |

---

## 9. The Tradeoff (Important!)

| Operation | Array | Linked List |
|---|---|---|
| Access by index | O(1) | O(n) |
| Insert at position | O(n) | O(1)* |
| Delete at position | O(n) | O(1)* |
| Search | O(n) or O(log n) | O(n) |

*If you already have a reference to the node.

> 📌 Linked lists trade **random access** for **fast modifications**.

---

## 10. When to Use Linked Lists

**Use linked lists when:**
- Frequent insertions/deletions
- Size changes often
- You don't need random access

**Use arrays when:**
- Frequent lookups by index
- Data is mostly static
- You need binary search

---

## 11. Types of Linked Lists

1. **Singly Linked** — each node points to next
2. **Doubly Linked** — each node points to next AND previous
3. **Circular** — last node points back to first

We'll focus on singly linked lists for now.

---

## 12. Key Takeaway

> **Arrays are optimized for reading. Linked lists are optimized for writing.**
>
> Neither is "better" — they solve different problems.

---

## 13. Mental Model

| Question | Array | Linked List |
|---|---|---|
| How is data stored? | Contiguous | Scattered |
| Fast at? | Reading | Inserting/Deleting |
| Slow at? | Inserting/Deleting | Reading by index |

---

## 🧭 Where We Are Now

You've now seen your first dynamic data structure:

- Arrays give fast reads, slow writes
- Linked lists give fast writes, slow reads
- This is a fundamental DSA tradeoff

## 🔜 What Comes Next

Next, we'll practice implementing linked list operations.

👉 **Phase 1 – Lesson 9: Linked List Operations**

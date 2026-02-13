# Phase 2 – Lesson 9: Searching in Linked Lists

> You cannot index into a linked list. The only way in is through the front door.

---

## 1. Core Rule (Burn This Into Memory)

You cannot index into a linked list.

There is no:

```python
linked_list[5]   # ❌
```

Because:

- Nodes are not stored contiguously
- Each node only knows the next one

The only way to access elements is:

**Start at head → move step by step.**

---

## 2. What Searching Looks Like

Let's define a node first:

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
```

Now let's build a list:

```
10 → 20 → 30 → 40 → None
```

Searching for `30` means:

1. Check `10`
2. Move to `20`
3. Move to `30`
4. Found

---

## 3. Code: Search in Linked List

```python
def contains(head, target):
    current = head

    while current is not None:
        if current.value == target:
            return True
        current = current.next

    return False
```

---

## 4. Time Complexity

Let `n` = number of nodes.

**Worst case:**

- Target is last element
- Or doesn't exist
- You traverse entire list

**O(n) time**

---

## 5. Space Complexity

We only use:

- `current`
- No new data structures

**O(1) space**

---

## 6. Compare to Arrays (Critical Thinking Moment)

| Operation | Array | Linked List |
|---|---|---|
| Access index | O(1) | Not possible |
| Linear search | O(n) | O(n) |
| Binary search | O(log n) | Not possible |

This is huge:

> **Binary search requires random access.**
> **Linked lists do not support random access.**

That alone makes arrays superior for searching.

---

## 7. Why Binary Search Fails on Linked Lists

Binary search needs:

```python
mid = (left + right) // 2
```

But in a linked list:

- You don't know where "middle" is
- You must traverse to reach it
- That traversal is O(n)

So binary search becomes pointless.

---

## 8. Real Insight: The Hidden Cost

**Arrays:**
- Fast lookup
- Cache friendly

**Linked lists:**
- Pointer chasing
- Memory scattered
- Slower in real machines

This is why:

> Linked lists are mostly used in interviews and theory.

---

## 9. LeetCode-Style Question (Lesson 9)

### Problem

Given the `head` of a linked list and a `target` value, return the **index** of the target.
Return `-1` if it does not exist.

### Example

```
10 → 20 → 30 → 40
target = 30
```

**Output:** `2`

### Think:

- You must count while traversing
- Time: O(n)
- Space: O(1)

---

## 10. Deep Takeaway

Linked lists trade:

- Memory locality
- Indexing speed
- Binary search ability

For:

- Fast insertions
- No shifting

**But in practice, arrays often win.**

---

## Where We Are Now

You now understand:

- Why you can't binary search a linked list
- How linear search works on linked lists
- The real-world performance gap between arrays and linked lists

## What Comes Next

**Lesson 10: Stacks — LIFO Thinking**

This is where linked lists become useful again.

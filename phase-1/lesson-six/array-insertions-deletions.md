# Phase 1 – Lesson 6: Array Insertions & Deletions (The Hidden Cost)

Binary search is fast — but sorted arrays are expensive to maintain.

## 1. The Core Trade-off

From Lesson 5, we learned:

**Sorted arrays + binary search → O(log n) search**

But arrays are stored contiguously

That combination creates a problem.

## 2. Why Arrays Are Fast (Reminder)

Arrays are fast because:

- Elements live next to each other in memory
- Index access is O(1)
- Jumping to `arr[i]` is instant

But that same property causes trouble.

## 3. Inserting into a Sorted Array

Suppose we have a sorted array:

```
numbers = [3, 7, 12, 18, 25]
```

We want to insert 10.

**Step 1: Find the correct position**

Binary search can do this in: **O(log n)**

So far so good.

**Step 2: Make space (This Is the Problem)**

To insert 10, the array must become:

```
[3, 7, 10, 12, 18, 25]
```

What must happen internally:

- 12, 18, and 25 shift one position right
- Multiple assignments occur
- If the array has n elements: Up to n elements may shift

👉 **Insertion = O(n)**

## 4. Deleting from a Sorted Array

Now remove 7:

```
numbers = [3, 7, 12, 18, 25]
```

After deletion:

```
[3, 12, 18, 25]
```

What happens:

- Elements after 7 shift left
- Again, many assignments

👉 **Deletion = O(n)**

## 5. Why Binary Search Can't Fix This

Binary search helps you:

- Find where to insert or delete

But it cannot:

- Move memory faster
- Avoid shifting elements

**Searching is fast. Shifting is slow.**

## 6. The Real Cost of "Sorted Arrays"

Let's summarize operations:

| Operation | Time |
|-----------|------|
| Search    | O(log n) |
| Insert    | O(n) |
| Delete    | O(n) |

So sorted arrays are:

- Excellent for read-heavy systems
- Bad for write-heavy systems

## 7. Real-World Analogy

Think of a row of numbered lockers:

Looking up locker #500 → instant

Adding a locker in the middle → everyone shifts

That's a sorted array.

## 8. When Sorted Arrays Make Sense

Use them when:

- Searches are frequent
- Inserts/deletes are rare
- Data is mostly static

Examples:

- Dictionaries
- Static configuration data
- Read-only datasets

## 9. When Sorted Arrays Are a Bad Fit

Avoid them when:

- Data changes constantly
- Insertions/deletions are frequent
- Order must be maintained dynamically

This leads us to new data structures.

## 10. Key Takeaway (Lock This In)

**Binary search is fast, but keeping data sorted is expensive.**

DSA is always about trade-offs.

---

## 🧭 Where We Are Now

You now understand:

- Why binary search is powerful
- Why it's not free
- Why arrays aren't always enough

This sets the stage for dynamic data structures.

## 🔜 What Comes Next

👉 **Phase 2 – Lesson 8: Linked Lists — Why They Exist**

But before that, we'll bridge the gap with:

**Lesson 7: Space Complexity (Gentle Introduction)**

Say: "Start Lesson 7"

You're building the exact intuition strong DSA learners have.

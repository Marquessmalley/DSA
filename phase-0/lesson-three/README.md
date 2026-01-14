# Phase 0 – Lesson 3: Arrays (Python Lists) — Your First Data Structure

This is where DSA stops being abstract and starts feeling real.

## 1. What Is an Array?

An array is a collection of elements stored in contiguous memory locations.

In Python, we use lists, but conceptually they behave like arrays.

```python
numbers = [10, 20, 30, 40]
```

**Key characteristics:**

- Ordered
- Indexed (starts at 0)
- Stores elements of the same conceptual type
- Fast access by index

## 2. Why Arrays Exist

Arrays solve a simple problem:

> "How do I store many values and access them efficiently?"

Without arrays, you'd need separate variables:

```python
a = 10
b = 20
c = 30
d = 40
```

Arrays give you:

- Structure
- Predictability
- Performance

## 3. Indexing: The Superpower of Arrays (O(1))

```python
numbers = [10, 20, 30, 40]

print(numbers[0])  # 10
print(numbers[2])  # 30
```

No matter how big the array is:

- Accessing `numbers[i]` takes the same time

👉 **Index access = O(1)**

### Mental Model

Imagine a row of mailboxes with numbers on them.
You don't open every mailbox — you go directly to the one you want.

## 4. Traversing an Array (O(n))

```python
for num in numbers:
    print(num)
```

What happens:

- 4 elements → 4 operations
- n elements → n operations

👉 **Traversal = O(n)**

This should feel intuitive after Lesson 2.

## 5. Updating Values by Index (Still O(1))

```python
numbers[1] = 99
```

Why?

- Python already knows where index 1 lives
- No shifting
- No looping

👉 **Update by index = O(1)**

## 6. Searching in an Unsorted Array (O(n))

```python
numbers = [7, 14, 21, 28]
target = 21

for n in numbers:
    if n == target:
        print("Found")
```

Worst case:

- Target is last
- Or not present

You must check every element.

👉 **Unsorted search = O(n)**

This is why algorithms matter, not just data structures.

## 7. Appending to an Array (Almost O(1))

```python
numbers.append(50)
```

Most of the time:

- Adds element to the end
- Very fast

Occasionally:

- Python needs more memory
- Copies elements

We still say:

👉 **Append = O(1) amortized**

⚠️ Don't worry about "amortized" yet — just remember append is usually fast.

## 8. Inserting in the Middle (This Is Expensive)

```python
numbers.insert(1, 15)
```

What happens internally:

- Elements after index 1 shift right
- Many assignments occur

If array has n elements:

- Up to n shifts

👉 **Middle insertion = O(n)**

This is one of the biggest weaknesses of arrays.

## 9. Removing Elements (Also O(n))

```python
numbers.pop(1)
```

Same problem:

- Elements must shift left
- Cost grows with size

👉 **Removal (not from end) = O(n)**

## 10. Summary Table (Very Important)

| Operation              | Time Complexity |
| ---------------------- | --------------- |
| Access by index        | O(1)            |
| Update by index        | O(1)            |
| Traverse               | O(n)            |
| Search (unsorted)      | O(n)            |
| Append (end)           | O(1)\*          |
| Insert / delete middle | O(n)            |

\* Amortized

## 11. Tiny Exercises (Think, Don't Code)

1. Why is index access O(1) but search O(n)?
2. If an array doubles in size, what happens to traversal time?
3. Why might arrays be a bad choice for frequent insertions?

## 12. Key Takeaway (Lock This In)

> **Arrays are fast for reading, slow for shifting.**

If you remember only one sentence from this lesson, make it that.

---

## 🔜 What Comes Next

Naturally, the next question is:

> "Can we search faster than O(n)?"

That leads us directly to binary search...

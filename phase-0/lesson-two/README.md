# Phase 0 – Lesson 2: Time Complexity (Big-O) — Zero-Math Version

> This is one of the most important lessons in all of DSA.
> If this clicks, everything else becomes easier.

---

## 1. What Problem Does Time Complexity Solve?

Imagine you write a program and ask:

> "Will this still work if my input becomes very large?"

Time complexity helps answer:

- Will it be fast enough?
- How does runtime grow as input grows?

⚠️ **Important:**

- We are **not** measuring seconds
- We are measuring **growth**

---

## 2. The Core Idea (In One Sentence)

**Time complexity describes how the number of operations grows with input size.**

Input size is usually called `n`.

---

## 3. Let's Start with the Simplest Example

### Example 1: One Loop

```python
numbers = [2, 4, 6, 8, 10]

for num in numbers:
    print(num)
```

Let's analyze:

- If list size = 5 → loop runs 5 times
- If list size = 100 → loop runs 100 times
- If list size = n → loop runs n times

We say this is:

> 👉 **O(n)** — "order of n"

Meaning:

- Runtime grows linearly
- Double the input → double the work

---

## 4. Why We Ignore Exact Numbers

Look at this code:

```python
for num in numbers:
    print(num)      # 1 operation
    print(num * 2)  # another operation
```

Runs:

- 2 operations per element
- Total ≈ 2n operations

We still say:

> 👉 **O(n)**

Why?

- Constants (like 2, 5, 100) don't matter for growth
- **Growth trend** matters

---

## 5. Constant Time: O(1)

### Example:

```python
numbers = [10, 20, 30]

print(numbers[0])
```

No matter:

- List size = 3
- List size = 1 million

This always takes the same time.

> 👉 **O(1)** — constant time

---

## 6. Two Loops = O(n²)

### Example:

```python
numbers = [1, 2, 3]

for i in numbers:
    for j in numbers:
        print(i, j)
```

Let's count:

- Outer loop runs n times
- Inner loop runs n times for each outer loop
- Total operations ≈ n × n = n²

> 👉 **O(n²)** — quadratic time

If:

- n = 10 → 100 operations
- n = 1,000 → 1,000,000 operations 😬

---

## 7. Important Clarification (Common Beginner Confusion)

### This is NOT O(n²):

```python
for num in numbers:
    print(num)

for num in numbers:
    print(num)
```

This is:

- n + n = 2n
- Still **O(n)**

| Pattern | Result |
|---------|--------|
| Nested loops | Multiply |
| Separate loops | Add |

---

## 8. The Three Most Important Big-O Types (For Now)

| Big-O | Meaning | Example |
|-------|---------|---------|
| O(1) | Constant | Access by index |
| O(n) | Linear | Single loop |
| O(n²) | Quadratic | Nested loops |

You'll see these everywhere.

---

## 9. How to "Read" Time Complexity (Skill You Must Build)

Look at code and ask:

1. How many loops?
2. Are they nested?
3. What grows with input size?

That's it.

---

## 10. Tiny Exercises (Answer Mentally)

### Exercise 1

```python
def print_first(arr):
    print(arr[0])
```

👉 Time complexity?

---

### Exercise 2

```python
def print_all(arr):
    for x in arr:
        print(x)
```

👉 Time complexity?

---

### Exercise 3

```python
def pairs(arr):
    for i in arr:
        for j in arr:
            print(i, j)
```

👉 Time complexity?

---

## 11. One Thing to NOT Worry About Yet

❌ Exact operation counting  
❌ Mathematical proofs  
❌ Space complexity (we'll do it later)

**Right now, intuition > precision.**

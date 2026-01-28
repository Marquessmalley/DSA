# Phase 0 – Lesson 4: Linear Search (Your First Algorithm)

> This lesson teaches you how algorithms think, not just how code runs.

---

## 1. What Is an Algorithm?

An algorithm is:

> A step-by-step process to solve a problem.

For this lesson, the problem is simple:

> "Given a list and a value, does the value exist?"

---

## 2. What Is Linear Search?

Linear search is the **simplest searching algorithm**. It sequentially checks each element in a collection until it finds the target value or reaches the end of the collection.

It's called "linear" because it progresses through the data in a **straight line**, one element at a time.

**Key characteristics:**

- Works on **any** list (sorted or unsorted)
- Requires **no preprocessing** of the data
- Simple to understand and implement
- Guaranteed to find the element if it exists

---

## 3. The Problem Setup

You're given:

- A list (array)
- A target value

```python
numbers = [4, 9, 15, 23, 42]
target = 15
```

Your task:

> Check whether `target` is in `numbers`

---

## 4. The Most Obvious Approach (And That's Okay)

You already know how to do this:

```python
for num in numbers:
    if num == target:
        print("Found")
```

This approach **is** an algorithm.

We call it **Linear Search**.

---

## 6. Linear Search — Formal Version

```python
def linear_search(arr, target):
    for item in arr:
        if item == target:
            return True
    return False
```

This function:

- Returns `True` if found
- Returns `False` otherwise

---

## 7. Why the Function Is Better (Inline vs Function)

You might be tempted to write linear search inline like this:

```python
for num in numbers:
    if num == target:
        print(f"Found {target} at index {numbers.index(num)}")
        break
else:
    print(f"{target} not found in the list")
```

But the function-based approach is better. Here's why:

### 1. Reusability

The function can be called anywhere, with any list:

```python
linear_search([1, 2, 3], 2)       # True
linear_search(["a", "b"], "c")    # False
```

The inline version is stuck where you wrote it.

### 2. No Hidden Performance Cost

The inline version uses `.index()` inside the loop:

```python
numbers.index(num)  # This searches the list AGAIN!
```

That's another O(n) operation inside your loop — making it O(n²) in the worst case.

The function avoids this entirely.

### 3. Return Values > Side Effects

- `print()` is a **side effect** — it outputs to the screen but gives you nothing back
- `return True/False` is a **value** — you can use it in logic:

```python
if linear_search(users, target_user):
    grant_access()
else:
    deny_access()
```

You can't do that with `print()`.

### 4. Easier to Test

Functions can be tested:

```python
assert linear_search([1, 2, 3], 2) == True
assert linear_search([1, 2, 3], 5) == False
```

Inline code with `print()` is hard to verify programmatically.

### 5. Separation of Concerns

- **Logic**: Does the item exist? (the function's job)
- **Presentation**: What do we show the user? (caller's job)

Mixing both in one place creates messy, inflexible code.

> 👉 **Takeaway**: Always prefer returning values from functions over printing inside loops.

---

## 8. Time Complexity Analysis (Very Important)

Let `n = len(arr)`

### Best Case

- Target is first element
- Only 1 comparison

👉 **O(1)**

### Worst Case

- Target is last element
- Or target doesn't exist
- Must check all `n` elements

👉 **O(n)**

### Average Case

- On average, check ~n/2 elements
- Still grows with `n`

👉 **O(n)**

---

## 8. Why Best Case Doesn't Matter Much

In DSA, we care mostly about:

> **Worst-case performance**

Why?

- Worst case is **predictable**
- Best case is **luck**

DSA prepares you for the hard scenario.

---

## 9. Visual Mental Model

Imagine checking names on a printed list:

- You start at the top
- Read one name at a time
- Stop when you see the name

That's linear search.

---

## 11. Important Limitation of Linear Search

Linear search:

- Works on any list
- Requires no preprocessing

But is **slow for large data**.

If:

- List = 10 items → fine
- List = 10 million items → not fine

👉 This limitation motivates better algorithms.

---

## 12. Tiny Exercises (Think First)

### Exercise 1

```python
def contains_zero(arr):
    for x in arr:
        if x == 0:
            return True
    return False
```

👉 Best-case time complexity?
👉 Worst-case time complexity?

### Exercise 2

```python
def first_even(arr):
    for x in arr:
        if x % 2 == 0:
            return x
    return None
```

👉 Best-case?
👉 Worst-case?

---

## 🧩 Practice Set 1: Arrays & Searching

### Problem 1: Linear Search (Beginner)

**📌 Problem Statement**

Given an array of integers `nums` and an integer `target`, return `true` if `target` exists in the array, otherwise return `false`.

**🧠 What This Tests**

- Array traversal
- Linear search logic
- Understanding of O(n)

**✍️ Function Signature**
```python
def contains(nums, target):
    pass
```

**🧪 Example**
```python
nums = [4, 2, 7, 1, 9]
target = 7

# Output: True
```

**🧭 Constraints (LeetCode Style)**

- `1 ≤ len(nums) ≤ 10⁵`
- `nums` is unsorted
- Do not use built-in `in`

**💡 Hints (Use Only If Needed)**

- Start from the beginning
- Stop early if you find the target

**⏱ Expected Complexity**

- Time: O(n)
- Space: O(1)

---

## 12. Key Takeaway (Lock This In)

> **Linear search trades simplicity for speed.**

It's simple, reliable, and slow.

---

## 🔜 What Comes Next

Now a very natural question arises:

> "Can we search faster than O(n)?"

The answer is **yes**, but with a condition.

# Phase 1 – Lesson 5: Sorted Arrays & Binary Search

To go faster, we must give something up.

So far, we've been searching like this: "Check every element until we find it."
That works — but it's slow at scale. Binary search asks a different question: "What if the data were organized?"

## 1. What Is Binary Search?

Binary search is a **searching algorithm** that works on sorted arrays.

> It repeatedly divides the search space in half until the target is found (or proven not to exist).

The key insight:

- Each comparison **eliminates half the remaining elements**
- This leads to O(log n) time complexity
- Vastly faster than linear search for large datasets

## 2. The Cost of Speed (Important Trade-off)

Binary search only works if the array is sorted.

```
numbers = [3, 7, 12, 18, 25, 31]
```

That's the price we pay:

- We must keep data sorted
- Insertions become harder
- But searches become much faster

👉 This is a classic DSA trade-off.

## 3. Intuition Before Code

Imagine guessing a number between 1 and 100.

You don't start at 1.
You guess 50.

Then:

- If too high → go left
- If too low → go right

Each guess eliminates half the possibilities.

That's binary search.

## 4. How Binary Search Works (Step by Step)

Given:

```
numbers = [3, 7, 12, 18, 25, 31]
target = 18
```

Steps:

1. Look at the middle element → 18
2. Is it the target?
3. Yes → done

Worst case:

- You cut the array in half
- Then in half again
- Then again…

## 5. Binary Search Code (Iterative)

```python
def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return True
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return False
```

Don't worry about memorizing this.
Focus on the idea.

## 6. Time Complexity (Why This Is Powerful)

The power of binary search comes from how much work it removes at each step.

### The Core Rule

Each step of binary search cuts the remaining search space in half.

This is very different from linear search, which removes only one element at a time.

### What "Cutting in Half" Looks Like

If an array has n elements:

| Step | Remaining elements |
| ---- | ------------------ |
| 1    | n / 2              |
| 2    | n / 4              |
| 3    | n / 8              |
| 4    | n / 16             |
| …    | …                  |

You are not checking elements one by one.
You are eliminating large portions immediately.

### Concrete Example

If the array has 16 elements:

16 → 8 → 4 → 2 → 1

Binary search finishes in 4 steps.

If the array has 1,024 elements:

1,024 → 512 → 256 → ... → 1

Binary search finishes in 10 steps.

### What This Means for Performance

As input size grows:

- Linear search work grows proportionally
- Binary search work grows very slowly

Doubling the input size:

- ❌ Does NOT double the work
- ✅ Adds only one extra step

### The Name for This Growth Pattern

This kind of growth is called logarithmic time, written as:

👉 **O(log n)**

You don't need to calculate logs.

Just remember:

**If an algorithm repeatedly cuts the problem in half, it's O(log n).**

## 7. Compare Growth (This Is the "Wow" Moment)

| Elements  | Linear Search (O(n)) | Binary Search (O(log n)) |
| --------- | -------------------- | ------------------------ |
| 10        | 10 checks            | ~4 checks                |
| 1,000     | 1,000 checks         | ~10 checks               |
| 1,000,000 | 1,000,000 checks     | ~20 checks               |

This is why binary search is famous.

## 8. Why Logarithmic Time Is So Fast

Because:

- The problem size shrinks aggressively
- Growth is extremely slow
- Doubling input size adds one extra step, not double work.

## 9. Important Limitations (Don't Ignore These)

Binary search:

- ❌ Does NOT work on unsorted data
- ❌ Makes insertions expensive
- ❌ Requires random access (arrays)

So again:

Speed comes with constraints.

## 10. Tiny Exercises (Think First)

### Exercise 1

If an array has 1,024 elements:

How many steps does binary search take (worst case)?

### Exercise 2

Can binary search work on:

- A linked list?
- An unsorted list?

Why or why not?

---

## 🧩 Practice Set 1: Arrays & Searching

### Problem 2: Binary Search (Beginner)

**📌 Problem Statement**

You are given a sorted array of integers `nums` and an integer `target`.

Return the index of `target` if it exists. Otherwise, return `-1`.

**🧠 What This Tests**

- Binary search logic
- Understanding sorted data
- O(log n) thinking

**✍️ Function Signature**
```python
def binary_search(nums, target):
    pass
```

**🧪 Example**
```python
nums = [1, 3, 5, 7, 9, 11]
target = 7

# Output: 3
```

**🧭 Constraints**

- `1 ≤ len(nums) ≤ 10⁵`
- `nums` is sorted in ascending order
- No duplicate elements

**💡 Hints**

- Track left and right
- Eliminate half each step

**⏱ Expected Complexity**

- Time: O(log n)
- Space: O(1)

---

## 11. Key Takeaway (Lock This In)

Binary search trades flexibility for speed.

**Linear search:**

- Works everywhere
- Scales poorly

**Binary search:**

- Requires sorted data
- Scales incredibly well

## 🧭 Where We Are Now

You've now seen your first major algorithmic upgrade:

- Same data structure (array)
- Drastically better algorithm

This is core DSA thinking.

## 🔜 What Comes Next

Next, we look at the hidden cost of sorted arrays:

👉 **Phase 1 – Lesson 6: Array Insertions & Deletions**

Say:

"Start Lesson 6"

and we'll explore why speed is never free.

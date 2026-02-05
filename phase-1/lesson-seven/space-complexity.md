# Phase 1 – Lesson 7: Space Complexity (Beginner-Friendly, No Math)

> If time complexity is "how long does it take?" — space complexity is "how much extra memory does it use?"

We'll keep this intuitive.

---

## 1. What Is Space Complexity?

Space complexity measures the memory an algorithm adds.

**Important clarification right away:**

> We care about **extra space**, not the input itself.

---

## 2. What Counts as "Extra Space"?

**Counts:**
- ✅ Variables
- ✅ New arrays / lists
- ✅ Hash maps / sets
- ✅ Recursive call stack

**Doesn't count:**
- ❌ The input array itself
- ❌ Constants (fixed number of variables)

---

## 3. Constant Space — O(1)

**Example: Your Binary Search**

```python
def binary_search(nums, target):
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1
```

Extra memory used:
- `left`
- `right`
- `mid`

That's three integers, no matter how big `nums` is.

> 👉 **Space Complexity: O(1)**

---

## 4. Linear Space — O(n)

**Example: Creating a New Array**

```python
def copy_array(nums):
    result = []
    for n in nums:
        result.append(n)
    return result
```

If `nums` has **n** elements, `result` also has **n** elements.

Memory grows linearly.

> 👉 **Space Complexity: O(n)**

---

## 5. Space vs Time Tradeoff (Very Important)

Consider this:

### Linear Search

```python
def contains(nums, target):
    for n in nums:
        if n == target:
            return True
    return False
```

| | Complexity |
|---|---|
| **Time** | O(n) |
| **Space** | O(1) |

### Using a Set for Faster Lookup

```python
def contains_fast(nums, target):
    lookup = set(nums)
    return target in lookup
```

| | Complexity |
|---|---|
| **Time** | O(1) average lookup |
| **Space** | O(n) extra memory |

> 📌 This is a classic DSA tradeoff:
> - **Faster time → more memory**
> - **Less memory → slower time**

---

## 6. Recursion Uses Space (Hidden!)

**Example:**

```python
def print_all(nums, i=0):
    if i == len(nums):
        return
    print(nums[i])
    print_all(nums, i + 1)
```

Each recursive call:
- Sits on the **call stack**
- Takes memory

If **n** elements:

> 👉 **Space Complexity: O(n)**

Even though you didn't create an array!

---

## 7. How LeetCode Expects You to Think

When asked: *"What's the space complexity?"*

Ask yourself:
- → Did I create new data structures?
- → Does memory grow with input?
- → Is recursion involved?

---

## 8. Common Beginner Confusions (Let's Kill Them)

| Misconception | Reality |
|---|---|
| ❌ "I used a loop so space is O(n)" | ✔️ Loops don't cost memory — variables do |
| ❌ "The input array counts" | ✔️ Input is free |
| ❌ "Python hides memory so I can't analyze it" | ✔️ Big-O ignores language details |

---

## 9. LeetCode-Style Question (Lesson 7)

**Problem:**

Given an array `nums`, return `True` if any value appears at least twice.

### Brute Force (Don't Code Yet)
- Nested loops
- Time: **O(n²)**
- Space: **O(1)**

### Optimized Idea
- Use a set
- Time: **O(n)**
- Space: **O(n)**

We'll implement this next lesson.

---

## 10. Mental Model (Lock This In)

| Question | Ask Yourself |
|---|---|
| **Time** | How many steps as n grows? |
| **Space** | How much extra memory as n grows? |

### Key Takeaway

> **Space complexity is the price you pay for speed.**
>
> Good solutions balance both — great solutions justify the tradeoff.

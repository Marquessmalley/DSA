# Phase 2 – Lesson 10: Stacks — LIFO Thinking

> Stack = Last In, First Out. The most recently added item is the first to leave.

---

## 1. What Is a Stack?

A stack is a data structure where you can only access the **top** element.

Think of:

- A stack of plates 🍽 — you take from the top
- The undo button — reverses the most recent action
- The browser back button — goes to the last page visited
- The call stack — the most recent function returns first

**Operations:**

| Operation | What it does | Time |
|-----------|-------------|------|
| `push(x)` | Add to top | O(1) |
| `pop()` | Remove from top | O(1) |
| `peek()` | Look at top | O(1) |

No random access. No searching in the middle.

---

## 2. Visual Model

Start empty:

```
[]
```

Push 10:

```
[10]
```

Push 20:

```
[10, 20]
```

Push 30:

```
[10, 20, 30]   ← top
```

Pop:

```
[10, 20]
```

30 comes out first. **That's LIFO.**

---

## 3. Implementing a Stack in Python

Using a list (most common):

```python
stack = []

stack.append(10)  # push
stack.append(20)  # push
stack.pop()       # pop → 20
```

**Time Complexity:**

- push → O(1)
- pop → O(1)
- peek → O(1)

**Space:** O(n)

---

## 4. Why Stacks Matter in DSA

Stacks are used in:

- Expression evaluation
- Parentheses validation
- Depth-first search (DFS)
- Undo systems
- Recursion (call stack)

They are everywhere.

---

## 5. The Most Famous Stack Problem: Valid Parentheses

**Problem:**

Given a string containing only `()[]{}`, determine if it is valid.

**Example:**

```
"()[]{}" → True
"(]"    → False
```

**Why is this a stack problem?**

- When you see an opening bracket → push it
- When you see a closing bracket → pop and compare
- You always match the most recent opener first

That's LIFO.

---

## 6. Code: Valid Parentheses

```python
def is_valid(s):
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in pairs.values():
            stack.append(char)
        elif char in pairs:
            if not stack or stack.pop() != pairs[char]:
                return False

    return len(stack) == 0
```

---

## 7. Time & Space

Let `n` = `len(s)`

**Time:**

- Single pass → **O(n)**

**Space:**

- Worst case (all open brackets) → **O(n)**

---

## 8. Why This Works (Deep Intuition)

When you see:

```
([{}])
```

The matching order is:

1. `{}` first
2. `[]` second
3. `()` last

Exactly reverse of insertion. That's a stack.

---

## 9. Important Mental Model

Stacks enforce:

> "Finish what you started most recently."

That idea appears everywhere in DSA.

---

## 10. Common Beginner Mistakes

- Forgetting to check if the stack is empty before `pop()`
- Forgetting to check the stack is empty at the end
- Using queue logic (FIFO) instead of stack logic (LIFO)

---

## 11. Key Takeaway

**Stacks are about reversing order of operations.**

They are simple — but extremely powerful. If a problem involves matching, nesting, or undoing in reverse order, think stack.

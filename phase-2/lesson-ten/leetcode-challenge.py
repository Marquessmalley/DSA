"""
Problem: Remove All Adjacent Duplicates In String

Problem Statement:
    Given a string s, remove all adjacent duplicate characters repeatedly
    until no adjacent duplicates remain. Return the final string.

Function Signature:
    def remove_duplicates(s: str) -> str

Example:
    remove_duplicates("abbaca")   # Output: "ca"

    Step by step:
    "abbaca" → remove "bb" → "aaca" → remove "aa" → "ca"

Key Insight:
    Use a stack — push characters, and pop when the top matches the current character.

Expected Complexity:
    Time: O(n)
    Space: O(n)
"""


def remove_duplicates(s):
    stack = []
    for char in s:
        if stack and stack[-1] == char:
            stack.pop()
        else:
            stack.append(char)

    return "".join(stack)


print(remove_duplicates("abbaca"))  # Expected: "ca"
print(remove_duplicates("azxxzy"))  # Expected: "ay"
print(remove_duplicates("aababaab"))  # Expected: "ba"

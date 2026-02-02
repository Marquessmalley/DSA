# Space Complexity is the amount of memory used by an algorithm.
# It is measured in units of memory.


# O(n) space complexity & Time Complexity O(n) becasue we are using a set to store the numbers and then comparing the length of the set to the length of the list.
def contains_duplicate(nums):
  return len(set(nums)) != len(nums)




numbers = [1,2]

print(contains_duplicate(numbers))

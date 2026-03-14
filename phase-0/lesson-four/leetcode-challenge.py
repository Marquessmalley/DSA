numbers = [4, 2, 7, 1, 9]
target = 7


def linear_search(nums, target):
    for num in numbers:
        if num == target:
            return True
    return False


def contains(nums, target):
    return target in nums


contains(numbers, target)

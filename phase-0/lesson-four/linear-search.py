# Linear Search

#Linear means start at the first element, check each item, move forward linearly until you find the target then stop.


# Obviously, this is not the best way to do it, but it's a good way to understand the concept.
numbers_list = [4,9,15,23,42]
target = 15

for num in numbers_list:
    if num == target:
        print(f"Found {target} at index {numbers_list.index(num)}")
        break
else:
    print(f"{target} not found in the list")


# This is the better way to do it, it's more efficient and it's more readable.
def linear_search(numbers_list, target):
    for num in numbers_list:
        if num == target:
            return True
    return False



def containsZero(numbers_list):
    for num in numbers_list:
        if(num == 0):
            return True
    else: return False


# Phase 1 – Lesson 5: Binary Search
# A more efficient search algorithm that works on sorted arrays


def b_search(arr, target):
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


def binary_search(arr, target):
    """
    Binary search implementation (iterative).
    
    Args:
        arr: A sorted array
        target: The value to search for
    
    Returns:
        True if target is found, False otherwise
    
    Time Complexity: O(log n)
    Space Complexity: O(1)
    """
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


def binary_search_recursive(arr, target, left=0, right=None):
    """
    Binary search implementation (recursive).
    
    Args:
        arr: A sorted array
        target: The value to search for
        left: Left boundary index
        right: Right boundary index
    
    Returns:
        True if target is found, False otherwise
    
    Time Complexity: O(log n)
    Space Complexity: O(log n) due to recursive call stack
    """
    if right is None:
        right = len(arr) - 1

    if left > right:
        return False

    mid = (left + right) // 2

    if arr[mid] == target:
        return True
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)


# Example usage and testing
if __name__ == "__main__":
    # Test data: sorted array
    numbers = [3, 7, 12, 18, 25, 31, 45, 52, 68, 99]
    
    print("=" * 50)
    print("BINARY SEARCH - ITERATIVE")
    print("=" * 50)
    print(f"Array: {numbers}\n")
    
    test_cases = [3, 18, 99, 50, 1, 100]
    
    for target in test_cases:
        result = b_search(numbers, target)
        print(f"Searching for {target}: {result}")
    
    print("\n" + "=" * 50)
    print("BINARY SEARCH - RECURSIVE")
    print("=" * 50)
    print(f"Array: {numbers}\n")
    
    for target in test_cases:
        result = binary_search_recursive(numbers, target)
        print(f"Searching for {target}: {result}")
    
    print("\n" + "=" * 50)
    print("PERFORMANCE COMPARISON")
    print("=" * 50)
    
    # Demonstrate why binary search is powerful
    import math
    
    sizes = [10, 1_000, 1_000_000, 1_000_000_000]
    
    print(f"{'Array Size':<20} {'Linear (O(n))':<20} {'Binary (O(log n))':<20}")
    print("-" * 60)
    
    for size in sizes:
        linear_steps = size
        binary_steps = math.ceil(math.log2(size))
        print(f"{size:<20,} {linear_steps:<20,} {binary_steps:<20}")
    
    print("\n" + "=" * 50)
    print("KEY INSIGHT")
    print("=" * 50)
    print("For 1 BILLION elements:")
    print(f"  Linear Search: ~1,000,000,000 checks")
    print(f"  Binary Search: ~30 checks")
    print(f"  Binary is ~33,333,333 times faster!")




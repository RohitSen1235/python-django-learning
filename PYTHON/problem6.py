#####################
## -- PROBLEM 6 -- ##
#####################

# Return the number of even integers in the given array.
#
# Examples:
#
# count_evens([2, 1, 2, 3, 4]) → 3
# count_evens([2, 2, 0]) → 3
# count_evens([1, 3, 5]) → 0

def count_evens(nums):
    count=0
    for n in nums:
        if(n%2==0):
            count+=1
    return count


print(count_evens([2, 1, 2, 3, 4]))
#####################
## -- PROBLEM 3 -- ##
#####################

# Given two strings, return True if either of the strings appears at the very end
# of the other string, ignoring upper/lower case differences (in other words, the
# computation should not be "case sensitive").
#
# Note: s.lower() returns the lowercase version of a string.
#
# Examples:
#
# end_other('Hiabc', 'abc') → True
# end_other('AbC', 'HiaBc') → True
# end_other('abc', 'abXabc') → True


def end_other(a, b):
  a.lower()
  b.lower()
  if(a.endswith(b) or b.endswith(a)):
      return True

  # if(a[-len(b):]==b or b[-len(a):]==a):
      # return True

  return False  

print(end_other('abc', 'abcab'))
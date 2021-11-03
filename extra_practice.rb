# def sum(a)
#   sum = 0
#   a.each do |n|
#     sum += n
#   end
#   return sum
# end
# p sum([1, 3, 2, 5, 4])

# def smallest_string(a)
#   small = a[0]
#   a.each do |str|
#     if str.length < small.length
#       small = str
#     end
#   end
#   return small
# end
# p smallest_string(["hotdog", "sandwich", "dog", "sand"])

# def reverse(a)
#   rev = []
#   i = a.length - 1
#   a.length.times do
#     rev << a[i]
#     i -= 1
#   end
#   return rev
# end
# p reverse([3, 1, 5, 0, 3, 4])

# def letter_a(a)
#   count = 0
#   a.each do |n|
#     if n[0].downcase == "a"
#       count += 1
#     end
#   end
#   return count
# end
# p letter_a(["hot", "apple", "alligator", "dog"])
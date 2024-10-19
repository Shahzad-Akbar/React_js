# List operations
my_list = [1, 2, 3, 4, 5]
print("Original list:", my_list)

# Adding elements
my_list.append(6)
print("List after appending 6:", my_list)

# Removing elements
my_list.remove(2)
print("List after removing 2:", my_list)

# Modifying elements
my_list[2] = 10
print("List after modifying the third element to 10:", my_list)

# Dictionary operations
my_dict = {'a': 1, 'b': 2, 'c': 3}
print("\nOriginal dictionary:", my_dict)

# Adding elements
my_dict['d'] = 4
print("Dictionary after adding ('d': 4):", my_dict)

# Removing elements
del my_dict['b']
print("Dictionary after removing 'b':", my_dict)

# Modifying elements
my_dict['c'] = 10
print("Dictionary after modifying 'c' to 10:", my_dict)

# Set operations
my_set = {1, 2, 3, 4, 5}
print("\nOriginal set:", my_set)

# Adding elements
my_set.add(6)
print("Set after adding 6:", my_set)

# Removing elements
my_set.remove(3)
print("Set after removing 3:", my_set)

# Note: Sets do not support indexing or direct modification of elements
# Instead, we can remove an element and add a new one
my_set.discard(4)
my_set.add(10)
print("Set after removing 4 and adding 10:", my_set)

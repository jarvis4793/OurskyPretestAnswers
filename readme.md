# Supplementary answer

## Answer 1

### State the space and time complexity of your solution.

- Time Complexity:

  - ingest

    - It has a time complexity of O(N), where N depends on the number of tokens in the input string. It is because it needs to iterates over each token to perform insertion. Since Map operations' (get, set, has) complexity is O(1), therefore, the time complexity remains O(N).

  - appearance
    - It has a time complexity of O(N), where N depends on the number of tokens in the input string. Again, it needs to iterates over each token to perform the Map Operation. As Map Operations have an average time complexity of O(1), the time complexity remains 0(N)

- Space Complexity:

  - The space complexity depends on the number of unique tokens (M) in ingest. The space required for the children map grows with the number of unique tokens encountered during the ingest function, therefore it is O(M)

## Answer 2

### The computational complexity of get(key) and put(key, value, weight) in Big O notation.

- get(key)

  - Since we store the data in HashMap and the operation of Map is O(1), therefore the time complexity is O(1)

- put(key, value, weight)

  - If the cache contains the key, the update of the corresponding cache entry only takes a Map Operation, which is O(1)
  - If the cache is full and new entry needs to be added, a linear search operation is performed over the contained cache node and replaced the lowest score cache node with new entry, O(n) for linear search, while map operation remains O(1)
  - Overall, the computational complexity of the put(key, value, weight) method is O(N) depending on the number of cache nodes in cache.

## Answer 3

### Supplementary answer

- Despite by mathematical logic the function could return as integer + (denominator - 1) / denominator, the calls of the division is different between nonRecur and recur, which the loss of precision in float is different. The differences will increase along with the growth of denominator size. Therefore, the use of a for loop to do the division is needed to replicate the amount of division of recursive call to produce the exact same result.

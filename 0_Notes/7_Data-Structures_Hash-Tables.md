## 7. Data Structures: Hash Tables

#### 81. Intro

- Hash tables, maps, dictionaries, Objects etc
  - Key values pairs

#### 82. Hash Function

- A hash function receives an input and generates a pattern

  - Its idempotent - which means, every time the sam einput will generate the same hash value

- Its very fast for data access

  - It will define the specific place in the memory

- Big O (1)

#### 83. Hash Collisions

- Pros:

  - Insert, lookup, delete, search have O(1)

- Collision
  - Eventually, as memory is limited, different data will be stored in the same space in memory
  - This is a collision
  - SO it will be handled creating another data structuce in that memory space, such as a linked list
  - It makes instead of O(1) becoming O(n)

#### 84. Hash Tables in DIfferent Languages

- Usually different languages let different data types as the valueas and also as keys

- In JS, as objects stringify the key

- But we can create a `new Map()` that will elt us store differetn types of keys

  - It maintains insertions order
  - Maps have unique keys

- js Also has new Set()

  - Set is a Map with unique values, and keys are not stored

  #### 85 & 86 - Implementing a Hash Table

  - So in the code we can see the logic behind hash table
    - And its possible to understand why tis O(1)

#### 88 keys()

- When we get all keys, its O(n2),why is certainly a huge disadvantage

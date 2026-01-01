# DSA Project – LRU Cache (Theory)

---

## 1. What is Caching?

Caching is a technique used to store frequently accessed data in a temporary and fast-access memory so that future requests for the same data can be served quickly. Instead of fetching data repeatedly from a slow source such as a database or disk, the system retrieves it from the cache, thereby improving performance.

### Key Concepts:
- **Cache Hit**: Data is found in the cache
- **Cache Miss**: Data is not found in the cache
- **Eviction**: Removing data from cache when it becomes full

Caching helps reduce latency, server load, and overall response time.

---

## 2. Usage of Caching in Web Applications

Caching plays a crucial role in modern web applications to improve scalability and user experience.

### Common Areas Where Caching is Used:
1. **Browser Cache**
   - Stores static files such as HTML, CSS, JavaScript, and images
   - Reduces repeated server requests

2. **Server-Side Cache**
   - Caches API responses and computed data
   - Improves application performance

3. **Database Caching**
   - Stores frequently executed query results
   - Reduces database load

### Example:
When a user visits a product page for the first time, data is fetched from the database and stored in cache. Subsequent visits retrieve data directly from cache, making the page load faster.

---

## 3. Caching in Computer Organization

In computer architecture, caching is used to bridge the speed gap between the CPU and main memory (RAM).

### Types of CPU Cache:
- **L1 Cache**: Smallest and fastest, closest to CPU
- **L2 Cache**: Larger and slightly slower than L1
- **L3 Cache**: Shared among processor cores

### Importance:
- CPU operates much faster than RAM
- Cache improves instruction execution speed
- Reduces memory access time

---

## 4. Introduction to Redis and Memcached

### Redis:
Redis is an in-memory data structure store that supports multiple data types such as strings, lists, sets, and hashes. It supports persistence and replication, making it suitable for complex caching scenarios.

### Memcached:
Memcached is a simple in-memory key-value store used primarily for caching. It does not support persistence and offers limited data structures but is very fast.

### Comparison:
| Feature | Redis | Memcached |
|------|------|-----------|
| Data Types | Multiple | Key-Value |
| Persistence | Yes | No |
| Use Case | Advanced caching | Simple caching |

---

## 5. Cache Replacement Strategies

When a cache reaches its maximum capacity, a replacement strategy decides which item to remove.

### Common Strategies:
1. **FIFO (First In First Out)**
   - Removes the oldest inserted item
   - Simple but inefficient

2. **LRU (Least Recently Used)**
   - Removes the least recently accessed item
   - Widely used in real-world systems

3. **LFU (Least Frequently Used)**
   - Removes items with the lowest access frequency
   - Suitable for long-term access patterns

4. **Random**
   - Removes a random item
   - Low overhead but unpredictable

---

## 6. LRU Cache Explanation

LRU (Least Recently Used) Cache removes the data that has not been used for the longest period of time when the cache is full. The idea is based on the assumption that recently used data is more likely to be reused.

### Advantages:
- Efficient memory utilization
- High cache hit ratio
- Suitable for real-time applications

---

## 7. Designing LRU Cache Using HashMap and Doubly Linked List

To achieve O(1) time complexity for get and put operations, LRU Cache uses two data structures:

### 1. HashMap
- Stores key to node mappings
- Provides constant time access

### 2. Doubly Linked List (DLL)
- Maintains usage order
- Head → Most Recently Used
- Tail → Least Recently Used

### Working:
- On cache hit, move the node to the head
- On cache miss, add new node
- If cache is full, remove the tail node

This design ensures optimal performance.

---

## 8. UML Diagram Description

The UML diagram consists of two main classes:

### LRUCache Class:
- Attributes: capacity, cache, head, tail
- Methods: get(), put(), addToHead(), removeNode(), moveToHead(), removeTail()

### Node Class:
- Attributes: key, value, prev, next

The LRUCache class uses Node objects to maintain the doubly linked list structure.

---

## 9. Conclusion

The LRU Cache is an efficient caching mechanism widely used in operating systems, databases, and web applications. By combining HashMap and Doubly Linked List, it ensures fast access and effective cache management, making it an important concept in Data Structures and Algorithms.

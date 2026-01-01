/**
 * Main class to test LRU Cache implementation
 */
public class Main {
    public static void main(String[] args) {

        LRUCache cache = new LRUCache(2);

        cache.put(1, 10);
        cache.put(2, 20);

        System.out.println(cache.get(1)); // Output: 10

        cache.put(3, 30); // Evicts key 2

        System.out.println(cache.get(2)); // Output: -1
        System.out.println(cache.get(3)); // Output: 30
    }
}

import java.util.HashMap;

/**
 * LRUCache class implements Least Recently Used Cache
 * using HashMap and Doubly Linked List.
 */
class LRUCache {

    private int capacity;
    private HashMap<Integer, Node> cache;

    // Dummy head and tail nodes
    private Node head;
    private Node tail;

    /**
     * Constructor to initialize LRU Cache with given capacity
     */
    public LRUCache(int capacity) {
        this.capacity = capacity;
        cache = new HashMap<>();

        // Create dummy head and tail
        head = new Node(0, 0);
        tail = new Node(0, 0);

        head.next = tail;
        tail.prev = head;
    }

    /**
     * Returns value of key if present in cache else -1
     */
    public int get(int key) {
        if (!cache.containsKey(key)) {
            // Cache miss
            return -1;
        }

        // Cache hit
        Node node = cache.get(key);
        moveToHead(node);
        return node.value;
    }

    /**
     * Inserts key-value pair into cache
     */
    public void put(int key, int value) {
        if (cache.containsKey(key)) {
            // Update existing node
            Node node = cache.get(key);
            node.value = value;
            moveToHead(node);
        } else {
            // Insert new node
            Node newNode = new Node(key, value);

            if (cache.size() == capacity) {
                // Remove least recently used node
                Node lru = removeTail();
                cache.remove(lru.key);
            }

            cache.put(key, newNode);
            addToHead(newNode);
        }
    }

    /**
     * Adds node right after head (Most Recently Used)
     */
    private void addToHead(Node node) {
        node.prev = head;
        node.next = head.next;

        head.next.prev = node;
        head.next = node;
    }

    /**
     * Removes a node from the doubly linked list
     */
    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    /**
     * Moves an existing node to the head
     */
    private void moveToHead(Node node) {
        removeNode(node);
        addToHead(node);
    }

    /**
     * Removes and returns the Least Recently Used node
     */
    private Node removeTail() {
        Node node = tail.prev;
        removeNode(node);
        return node;
    }
}

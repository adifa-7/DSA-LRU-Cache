/**
 * Node class represents each entry in the LRU Cache.
 * It is used in the Doubly Linked List.
 */
class Node {
    int key;
    int value;
    Node prev;
    Node next;

    // Constructor to initialize node
    Node(int key, int value) {
        this.key = key;
        this.value = value;
    }
}

// LRU Cache stands for Least Recently Used Cache. It is a type of cache in which we remove the least recently used entry when the cache is full. It has the following operations:

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
        this.head = new Node(null, null)
        this.tail = new Node(null, null)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    addNode(node) {
        node.prev = this.head
        node.next = this.head.next
        this.head.next.prev = node
        this.head.next = node
    }

    removeNode(node) {
        const prevNode = node.prev
        const nextNode = node.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
    }

    moveToHead(node) {
        this.removeNode(node)
        this.addNode(node)
    }

    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key)
            this.moveToHead(node)
            return node.value
        }
        return -1
    }

    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key)
            node.value = value
            this.moveToHead(node)
        } else {
            const node = new Node(key, value)
            this.cache.set(key, node)
            this.addNode(node)
            if (this.cache.size > this.capacity) {
                const lastNode = this.tail.prev
                this.cache.delete(lastNode.key)
                this.removeNode(lastNode)
            }
        }
    }
}
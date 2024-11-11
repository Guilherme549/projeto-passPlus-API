// Queue.js
class Queue {
    constructor(id, name, createdAt) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt || new Date();
    }
}

module.exports = Queue;

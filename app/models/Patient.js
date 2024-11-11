// Patient.js
class Patient {
    constructor(id, name, age, priority, status) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.priority = priority;
        this.status = status || 'waiting';
    }
}

module.exports = Patient;

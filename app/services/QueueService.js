class QueueService {
    constructor(db) {
        this.db = db;
    }

    async addPatientToQueue(patient) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO Patients (name, age, priority, status) VALUES (?, ?, ?, ?)`;
            this.db.run(query, [patient.name, patient.age, patient.priority, 'waiting'], function (err) {
                if (err) {
                    return reject(err);
                }
                resolve({ id: this.lastID });
            });
        });
    }

    async getQueuePatients() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM Patients WHERE status = 'waiting' ORDER BY priority DESC, id ASC`;
            this.db.all(query, [], (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }
}

export default QueueService;

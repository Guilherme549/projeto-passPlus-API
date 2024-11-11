class PatientService {
    constructor(db) {
        this.db = db;
    }

    createPatient(patient) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO Patients (name, age, priority, status) VALUES (?, ?, ?, ?)`;
            this.db.run(query, [patient.name, patient.age, patient.priority, 'waiting'], function (err) {
                if (err) return reject(err);
                resolve({ id: this.lastID, ...patient });
            });
        });
    }

    updateStatus(id, status) {
        return new Promise((resolve, reject) => {
            const query = `UPDATE Patients SET status = ? WHERE id = ?`;
            this.db.run(query, [status, id], function (err) {
                if (err) return reject(err);
                resolve({ id, status });
            });
        });
    }
}

module.exports = PatientService;

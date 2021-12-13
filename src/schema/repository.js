class PersonRepository {
  constructor(db) {
    this.db = db;
  }

  async createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255) NOT NULL,
      surname VARCHAR(255) NOT NULL
    )`;

    return await this.db.run(sql);
  }

  insertData() {
    const sql = `
      INSERT INTO users 
    `;
  }
}

module.exports = { PersonRepository };

class DbSaveStrategy {
  constructor(db) {
    this.db = db;
  }

  async init() {
    const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255) NOT NULL,
      surname VARCHAR(255) NOT NULL
    )`;

    return await this.db.run(sql);
  }

  async save({ name, surname }) {
    const sql = `
      INSERT INTO users (name, surname) VAlUES (${name}, ${surname})
    `;

    return await this.db.run(sql);
  }
}

module.exports = DbSaveStrategy;

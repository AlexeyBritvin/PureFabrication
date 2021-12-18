"use strict";

const { Database } = require("./schema/db");

const FileSaveStrategy = require("./schema/file-save-strategy");
const DbSaveStrategy = require("./schema/db-save-strategy");
console.log("DbSaveStrategy", DbSaveStrategy);

const db = new Database("./db.sqlite3");
class Loader {
  strategy;

  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  save() {
    try {
      this.strategy.save();
    } catch (err) {
      console.log("you haven't chosen strategy");
    }
  }

  read() {
    try {
      this.strategy.read();
    } catch (err) {
      console.log("you haven't choosen strategy");
    }
  }
}

(async () => {
  const dbSaveStrategy = new DbSaveStrategy(db);
  const fileSaveStrategy = new FileSaveStrategy();

  await dbSaveStrategy.init();
  await fileSaveStrategy.init();

  const loader = new Loader(dbSaveStrategy);

  await loader.save({
    name: "alex",
    surname: "smirnov",
  });
})();

// const db = require('./db.js');

// const db = {};

// class Person {}

// const loader = (db) => (entity) => {
//   const sql = `SELECT ${entity} WHERE id = $1`;
//   return async (id) => {
//     const data = await db.queryRow(sql, [id]);
//     return Object.assign(new Person(), data);
//   };
// };

// // Usage

// (async () => {
//   const load = loader(db);
//   const loadPerson = load('Person');
//   const person = await loadPerson(100);
//   console.log(person);
// })();

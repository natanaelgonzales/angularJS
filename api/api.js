let conn;

// (async () => {
//   connect();
// //   await createTable();
// //   await insert();
//   await showRows();
// })();

connect();
showRows()


function connect() {
  let { Client } = require('pg');
  conn = new Client({
    host: 'localhost',
    database: 'angular',
    user: 'postgres',
    password: '159874',
    port: 5432,
  });
  conn.connect();
}

// async function createTable() {
//   await conn.query(`
//     create table if not exists people (
//       id integer not null,
//       name varchar,
//       primary key (id)
//     )
//   `);
//   console.log('Table created');
// }

// async function insert() {
//   let { rows } = await conn.query(
//     `insert into people (id, name) values (1, 'Paul McCartney'), (2, 'John Lennon') returning *`
//   );
//   console.log(`Rows inserted: ${rows.length}`);
// }

async function showRows() {
  let { rows } = await conn.query(`select * from rulename`);
  for (const row of rows) {
    console.log(row);
  }
}

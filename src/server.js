const app = require("./app");
const knex = require("knex");
const cors = require('cors')
const { PORT, DATABASE_URL } = require("./config");

const db = knex({
  client: "pg",
  connection: DATABASE_URL,
});

app.use(cors());
app.set("db", db);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app
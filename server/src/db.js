const initOptions = {};
const pgp = require('pg-promise')(initOptions);
const cn = process.env.DB;
const db = pgp(cn);

export const analysesQuery = `
SELECT *
  FROM vice_analyses
 WHERE username = $1;
`;

export default db;

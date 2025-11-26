import { Pool } from "pg";

export default async function QueryDatabase() {
  const pool = new Pool({ connectionString: process.env.POSTGRES_URL });
  const results = await pool.query(
    "select title, created_timestamp from branch_lib.branch_lib_core.fact_story order by random() limit 1;"
  );

  const rows = results.rows;
  const fields = results.fields;

  return (
    <div className="p-2">
      <table>

        <thead>
          <tr>
            {rows.map((row) => (
              <th key={row.title}>{row.title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr>
              <td>{row.created_timestamp}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}


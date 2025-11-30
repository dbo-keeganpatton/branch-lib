import { Pool } from "pg";

export default async function QueryDatabase() {
  const pool = new Pool({ connectionString: process.env.POSTGRES_URL });
  const results = await pool.query(
    "select title, created_timestamp from branch_lib.branch_lib_core.fact_story order by random() limit 1;"
  );

  const rows = results.rows;

  return (
    <div className="p-2 ml-2 mr-2 rounded-sm border border-purple-600">
      <table className="bg-purple-400/2">

        <thead>
          <tr>
            {rows.map((row) => (
              <th key={row.title} className="p-2">{row.title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.title} className="p-2">
              <td className="p-2">{row.created_timestamp}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}


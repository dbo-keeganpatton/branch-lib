import { Pool } from "pg";

export default async function QueryDatabase() {
  const pool = new Pool({ connectionString: process.env.POSTGRES_URL });
  const results = await pool.query(
    "select title, created_timestamp from branch_lib.branch_lib_core.fact_story limit 10;"
  );

  const rows = results.rows;
  const fields = results.fields;

  return (
    <div className="p-2">
      <table>
        <caption>Stories</caption>

        <thead>
          <tr>
            {fields.map((field) => (
              <th key={field.name}>{field.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {fields.map((field) => (
                <td key={field.name}>{row[field.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}


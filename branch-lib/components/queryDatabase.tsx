import { Pool } from "pg";

export default async function QueryDatabase() {

  const pool = new Pool({ connectionString: process.env.POSTGRES_URL });
  const results = await pool.query('select * from branch_lib.branch_lib_core.dim_author_story limit 10;');
  const results_array = results.rows

  return (
    <div>

      <ul className="space-y-4">

        {/* Inject the result set wherever from DB */}
        {results_array.map((result) => (

          <li key={result.title}>
            <div>
              <p>{result.author_id}</p>
              <p>{result.story_id}</p>
            </div>
            <span>{result.created_timestamp.toISOString()}</span>
          </li>

        ))}

      </ul>

    </div>
  );

};



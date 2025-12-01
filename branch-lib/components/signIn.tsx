export async function SignIn(email: string, name: string) {

  const response = await fetch('/api/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: 'INSERT INTO branch_lib_core.dim_author (author_id, author_name) VALUES ($1, $2) RETURNING *',
      params: [email, name]
    })
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }

  return response.json();

};



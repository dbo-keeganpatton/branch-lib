import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.POSTGRES_URL });


export async function POST(request: NextRequest) {
  let client;
  try {

    const body = await request.json();
    const { query, params } = body;

    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    client = await pool.connect();
    const result = await client.query(query, params || []);

    return NextResponse.json({
      success: true,
      data: result.rows,
      rowCount: result.rowCount,
    });

  } catch (error) {
    console.error('Database query error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      client.release();
    }
  }
};


// Do not use in prod, testing only
export async function GET(request: NextRequest) {
  let client;

  try {
    const { searchParams } = new URL(request.url);
    const table = searchParams.get('table');

    if (!table) {
      return NextResponse.json(
        { error: 'Table name is required' },
        { status: 400 }
      );
    }


    client = await pool.connect();
    const result = await client.query(`SELECT * FROM ${table} LIMIT 100`);

    return NextResponse.json({
      success: true,
      data: result.rows,
      rowCount: result.rowCount,
    });

  } catch (error) {
    console.error('Database query error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      client.release();
    }
  }
};

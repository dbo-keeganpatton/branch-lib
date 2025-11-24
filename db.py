import json

import psycopg2

try:
    with open("../branch-lib/secrets/db.json", "r") as f:
        secrets = json.load(f)
        if secrets:
            print("Secrets retrieved")
            conn = psycopg2.connect(
                host=secrets.get("host"),
                database=secrets.get("database"),
                user=secrets.get("user"),
                password=secrets.get("password"),
            )

            cur = conn.cursor()
            query = (
                "select * from branch_lib.branch_lib_core.dim_author_story limit 11;"
            )
            cur.execute(query)
            row = cur.fetchall()
            if row:
                print(row)

except Exception as e:
    print(f"Issue getting secrets==== {e}")

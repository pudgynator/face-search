import { Pool } from "pg";

const globalForDb = globalThis as unknown as { pool?: Pool};
const database_url = process.env.DATABASE_URL;

export const pool = globalForDb.pool ?? new Pool({ connectionString: database_url });

if (process.env.NODE_ENV !== "production") globalForDb.pool = pool;
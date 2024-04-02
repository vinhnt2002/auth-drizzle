import { neon } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const conectionString =
  process.env.NODE_ENV === "production"
    ? process.env.NEON_PROD_DB_URL
    : process.env.NEON_DEV_DB_URL;

if (!conectionString) {
  console.log("🔴 no database URL");
}

const sql = neon(conectionString!);

const db = drizzle(sql, { schema });


export default db;
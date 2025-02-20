import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER. PGPASSWPRD } = process.env;

// creates a SQL connection using our env variables
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWPRD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);

// this sql function we export is used as a tagged template literal, which allows us to write SQL queries safely

// postgresql://neondb_owner:npg_NW8olSOGfx5E@ep-dawn-meadow-a83i0d05-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
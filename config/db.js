import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    user: "postgres",           // ← bu to‘g‘ri
    host: "localhost",
    database: "ottiz_olti",     // ← bu ham to‘g‘ri bo‘lishi kerak
    password: "ml;'",           // ← parol to‘g‘riligini tekshiring
    port: 5432,
});

export default pool;
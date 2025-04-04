import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    user: "postgres",  // PostgreSQL foydalanuvchi nomi
    host: "localhost",
    database: "ottiz_olti",  // Yaratgan ma'lumotlar bazangizning nomi
    password: "ml;'",  // Parol
    port: 5432,
});

export default pool;
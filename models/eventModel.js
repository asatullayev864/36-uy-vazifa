import pool from "../config/db.js";

export const registerUser = async (name, email, event_Id) => {
    const query = `
        INSERT INTO registrations (name, email, eventId)
        VALUES($1, $2, $3)
        RETURNING *;
    `;

    const values = [name, email, event_Id];
    const { rows } = await pool.query(query, values);
    return rows[0];
};
import pool from '../config/db.js';

export const registerUser = async (name, email, event_id) => {
    const query = `
    INSERT INTO registrations (name, email, event_id) 
    VALUES ($1, $2, $3) 
    RETURNING *;
  `;
    const values = [name, email, event_id];

    const result = await pool.query(query, values); // SQL so'rovini bajarish
    return result.rows[0];  // Qaytgan natijani olish
};
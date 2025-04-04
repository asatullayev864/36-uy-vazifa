import { registerUser } from "../models/eventModel.js";

export const register = async (req, res) => {
    console.log('Kelgan body:', req.body);
    try {
        const { name, email, event_id } = req.body;
    
        if (!name || !email || !event_id) {
            return res.status(400).json({ message: "Barcha maydonlarni to'ldiring!" });
        }

        const newUser = await registerUser(name, email, event_id);
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Serverda hatolik !.' });
    }
};
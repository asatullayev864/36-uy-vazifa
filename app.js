import express from "express";
import eventRoutes from "./routes/eventRoutes.js"; // eventRoutes import qilamiz

const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/api/events', eventRoutes);  // Yozuvni to'g'ri yo'l bilan qo'shamiz

app.listen(PORT, () => {
    console.log((`Server ${PORT} - portda ishga tushdi !!!`));
});
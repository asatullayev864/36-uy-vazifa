import express from "express";
import eventRoutes from "./routes/eventRoutes.js"

const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
    console.log((`Server ${PORT} - portda ishga tushdi !!!`));
});
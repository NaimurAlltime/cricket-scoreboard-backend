import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes/scoreRoutes';
import connectDB from './db/database';

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/scores', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Server is working....!",
    });
});

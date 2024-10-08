import express from 'express';
import Score from '../models/Score';


const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const scores = await Score.find();
        res.json(scores);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching scores', error });
    }
});

router.post('/', async (req, res) => {
    const { team1, team2, score1, score2 } = req.body;
    const score = new Score({ team1, team2, score1, score2 });

    try {
        await score.save();
        res.status(201).json(score);
    } catch (error) {
        res.status(400).json({ message: 'Error creating score', error });
    }
});

export default router;

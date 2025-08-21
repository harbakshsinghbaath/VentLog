import express from 'express';
const router = express.Router();
import verifyJWT from '../middleware/verifyJWT.js';

router.post('/api/vent', verifyJWT, (req, res) => {
    res.json({ message: "Welcome to the vent page!" });
});

export default router;
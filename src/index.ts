import express from 'express';
import cors from 'cors';

import subjectsRouter from "./routes/subjects";

const app = express();
const port = 8000;

if(!process.env.FRONTEND_URl) {
    throw new Error('FRONTEND_URl is required in .env file');
}

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}))

app.use(express.json());

app.use('/api/subjects', subjectsRouter)

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Classroom Management API' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
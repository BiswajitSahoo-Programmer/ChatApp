import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import {connectDB} from './lib/db.js';

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Production frontend serving
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(projectRoot, "frontend", "dist")));

    app.get("*", (_, res) => {
        res.sendFile(
            path.join(projectRoot, "frontend", "dist", "index.html")
        );
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
    connectDB();
});
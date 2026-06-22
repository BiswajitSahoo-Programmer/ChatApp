import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import {connectDB} from './lib/db.js';
import { ENV } from './lib/env.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../');

const PORT = ENV.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Production frontend serving
if (ENV.NODE_ENV === "production") {
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
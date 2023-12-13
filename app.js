import express from "express";
import { config } from "dotenv";
import routesCompte from "./routes/compteRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/comptes", routesCompte);

app.listen(port, () => {
    console.log(`Serveur demarré avec le port ${port}: http://localhost:${port}`);
})
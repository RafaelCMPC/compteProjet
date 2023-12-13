import * as compteController from "../controllers/compteController.js";
import { Router } from "express";

const router = Router();

router.get("/", compteController.getAllAccounts);
router.get("/:numero", compteController.getAccount);
router.delete("/:numero", compteController.closeAccount);

export default router;
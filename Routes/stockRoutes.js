import express from 'express'
import { createStock, deleteStock, getAll, updateStock } from '../Controllers/stockController.js';

const router = express.Router();
router.post("/create",createStock)
router.post("/delete",deleteStock)
router.put("/update",updateStock)
router.get("/all",getAll)
export default router;
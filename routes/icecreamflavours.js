import express from "express";
import {
  getIcecreamFlavour,
  getIcecreamFlavours,
  createIcecreamFlavour,
  deleteIcecreamFlavour,
  updateIcecreamFlavour,
} from "../controllers/icecreamflavours.js";

const router = express.Router();

router.get("/", getIcecreamFlavours);
router.get("/:id", getIcecreamFlavour);
router.post("/", createIcecreamFlavour);
router.delete("/:id", deleteIcecreamFlavour);
router.patch("/:id", updateIcecreamFlavour);

export default router;

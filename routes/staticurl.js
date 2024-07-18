import express from "express";
import { staticpage } from "../controller/staticurl.js";

const router = express.Router();

router.get("/", staticpage);

export { router };

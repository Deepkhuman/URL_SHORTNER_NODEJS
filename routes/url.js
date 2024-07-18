const router = express.Router();
import express from "express";
import { getGenerateUrl, handleGenerateUrl } from "../controller/url.js";

router.post("/", handleGenerateUrl);
router.get("/:shortID", getGenerateUrl);

export { router };

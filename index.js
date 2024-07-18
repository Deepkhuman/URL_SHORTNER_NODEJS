import express from "express";
import path from "path";
import { connect } from "./db.js";
import { URL as url } from "./models/url.js";
import { router as staticroute } from "./routes/staticurl.js";
import { router } from "./routes/url.js";

const app = express();
const PORT = 3000;

//connection
connect();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router
app.use("/url", router);
app.use("/", router);
app.use("/", staticroute);

//initialization of viewengine and set default view path
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", async (req, res) => {
	const result = await url.find({});
	res.render("home", { urls: result });
});
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

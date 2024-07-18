import express from "express";
import { path } from "path";
import { connect } from "./db.js";
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

app.set("view engine", "ejs");
app.set("view", path.resolve("./views"));

app.get("/", (req, res) => {
	res.send("<h1>Welcome to URL Shortner API</h1>");
});
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

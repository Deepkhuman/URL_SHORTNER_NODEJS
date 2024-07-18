import { URL as url } from "../models/url.js";

async function staticpage(req, res) {
	const result = await url.find({});
	res.render("home", { urls: result });
}

export { staticpage };

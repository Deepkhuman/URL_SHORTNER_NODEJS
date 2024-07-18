import { nanoid } from "nanoid";
import { URL as url } from "../models/url.js";
async function handleGenerateUrl(req, res) {
	const shortID = nanoid(8);
	const body = req.body;
	if (!body.url) return res.status(400).json({ error: "Url is required" });

	await url.create({
		shortID: shortID,
		redirectURL: body.url,
		visitHistory: [],
	});

	res.render("home", {
		id: shortID,
	});
}

async function getGenerateUrl(req, res) {
	const id = req.params.shortID;
	let data = await url.findOneAndUpdate(
		{
			shortID: id,
		},
		{
			$push: {
				visitHistory: {
					timestamp: Date.now(),
				},
			},
		}
	);
	if (data) {
		res.redirect(data.redirectURL);
	} else {
		res.status(404).json({ error: "Url not found" });
	}
}
export { getGenerateUrl, handleGenerateUrl };

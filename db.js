import mongoose from "mongoose";

async function connect() {
	try {
		await mongoose.connect("mongodb://localhost:27017/url-shortner");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error.message);
	}
}

export { connect };

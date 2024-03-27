const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/contact", (req, res) => {
	// Log the form data to the console
	console.log(req.body);

	// Respond to the fetch call
	res.json({ message: "Form data received!" });
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});

const express = require("express");
const app = express();

app.post("/login", (_, res) => {
	res.status(200).json({
		token: "ini token",
	});
});

app.listen(3000, () => {
	console.log("🚀 ~ file: app.js ~ line 6 ~ app.listen ~ 3000", 3000);
});

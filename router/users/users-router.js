const express = require("express")
const router = express.Router()


let users = [
	{ id: "1", name: "Jane Doe" },
	{ id: "2", name: "John Doe" },
	{ id: "3", name: "Jack Doe" },
]

router.get("/", (req, res) => {
	res.status(200).json({
		message: "Welcome to Pintereach-2"
	})
})

router.get("/users", (req, res) => {
	res.status(200).json(users)
})
router.get("/auth", (req, res) => {
	res.status(200).json(users)
})

module.exports = router;
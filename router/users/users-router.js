const express = require("express")
const users = require("./users-model")

router.post("/users", (req, res) => {
	users.add(req.body)
		.then((user) => {
			res.status(201).json(user)
		})
		.catch((error) => {
			next(error)
		})
})
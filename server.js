const express = require("express")
const helmet = require("helmet")
const usersRouter = require("./router/users/users-router")
const server = express()

server.use(helmet())
server.use(express.json())

server.use(usersRouter)

server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server
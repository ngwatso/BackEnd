require("dotenv").config();

const server = require("./server")

const port = process.env.PORT

server.listen(port, () => {
	console.log(`API running at http://localhost:${port}`)
})

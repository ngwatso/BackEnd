const express = require('express');
const server = express();
const morgan = require("morgan")
const port = 8000;

server.use(express.json())

server.use((err, req, res, next) => {
    // 	// log the error and return a generic response to avoid the risk
    // 	// of leaking sensitive info that might be in the error
        console.log(err)
    
        res.status(500).json({
            message: "Something went wrong, try again later",
        })
    })
    
    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    });
    
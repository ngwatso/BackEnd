const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send("Hello Lambda");
})

server.listen(8000, () => console.log('API running on port 8000'))
require('dotenv').config()
const express = require("express")
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Users = require('../users/users-model');

const posts = [
	{
		username: 'Lily',
		title: 'Post 1',
	},
	{
		username: 'Arely',
		title: 'Post 2',
	},
]
router.get("/", (req, res) => {
	res.status(200).json({
		message: "Welcome to Pintereach-2"
	})
})

router.get('/api/posts' ,  authenticateToken,(req, res) => {
	res.json(posts.filter(post => post.username === req.user.name))
	
	
})
router.post("/api/login",(req, res) => {
	
	
	//Authenticate User
	const username = req.body.username
	const user = {name: username}
	
	const accesstoken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
	res.json({accessToken: accesstoken})
})

router.post("/api/register", (req, res,next) =>{
	let user = req.body;

  // bcrypting the password before saving
	const rounds = process.env.BCRYPT_ROUNDS || 8; // 2 ^ 8
	const hash = bcrypt.hashSync(user.password, rounds);

  // never save the plain text password in the db
	user.password = hash
	
	Users.add(user)
    .then(saved => {
      res.status(201).json({
        message: `Great to have you, ${saved.username}`,
      });
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
})





function authenticateToken(req, res, next){
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]
	
	if(token == null) return res.sendStatus(401)
	
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
		if(err) return res.sendStatus(403)
		req.user = user
		next()
	})
	
	
}

module.exports = router;
const jwt = require("jsonwebtoken")
const {jwtSecret} = require("../../config/secrets")

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if(!token){
    res.status(401).json("Can I haz token?")
  }else{
    jwt.verify(token,jwtSecret,(err,decoded)=>{
      if(err){
        res.status(401).json("Token is bad )*: " + err.message)
      }else{
        req.decodedToken = decoded
        next()
      }
    })
  }
};

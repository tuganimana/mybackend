const jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
    try{
        const token =req.headers.authorization.split(" ")[1];
       
        const decoded =jwt.verify(token,'chance' );
        req.userData =decoded;
        next();
    }
    catch{
        console.log(token)
        return res.status(401).json({
            message:'Auth fails'
        })
    }
    
}
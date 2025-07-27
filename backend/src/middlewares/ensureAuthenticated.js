const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if(!auth){
        res.status(403).json({message:"Unauthorized, JWT token is required"});
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET); //this line basically decodes the JWT token and ensures whether the jwt token is valid or not!
        req.user = decoded; //if the token is valid, we can access the user information from the decoded token  
        next(); //proceed to the next middleware or route handler
    } catch (error) {
        res.status(403).json({message:"JWT token is not valid or expired"});
    }
}

module.exports = ensureAuthenticated;
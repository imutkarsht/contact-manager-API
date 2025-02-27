import expressAsyncHandler from "express-async-handler";
import jsonWebToken from 'jsonwebtoken'

const validateToken = expressAsyncHandler(async (req,res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization

    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1]
        jsonWebToken.verify(token, process.env.SECRET, (err, decoded) => {
            if(err){
                res.status(401);
                throw new Error("User is not authorized")
            }
            req.user = decoded.user
            next();
        })
    }

    if(!token) {
        res.status(401)
        throw new Error("user not authorized or token is missing")
    }
})
// duhhdjfdgds

export default validateToken
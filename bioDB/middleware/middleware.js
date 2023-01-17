import jwt from "jsonwebtoken";

const token = jwt.sign({ username:"munkhorgil" , age:"16"},"secret", {expiresIn : "10000ms"} )

export const createTokenMiddleWare = (req , res , next) =>{
  console.log(token )
  next()
}
export const checkTokenMiddleware = (req , res , next ) => {
    jwt.verify(token , "secret" , (err , result))
}
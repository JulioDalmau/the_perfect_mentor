require('dotenv').config()
const jwt = require('jsonwebtoken')

const validateToken = (token) => {
    return jwt.verify(token, process.env.SECRET)
}
const generateToken = (payload /* id */) => {
    console.log("por aca paso",payload)
    const token = jwt.sign(/* payload */ /* {id} */{user: payload}, process.env.SECRET, { expiresIn: '7d' })
    console.log("Este es el token",token)
    return token
}


module.exports = { validateToken, generateToken }
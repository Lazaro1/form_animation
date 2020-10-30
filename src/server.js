const express = require('express');
const patch = require('path')
const server = express()


server
.use(express.static('public'))
.get ('/', (req,res) => {
    console.log(req.query)
    return res.sendFile(patch.join(__dirname, 'views','index.html'))        
})


server.listen(5550)
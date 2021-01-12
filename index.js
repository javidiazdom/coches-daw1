const express = require('express')
const path = require('path')
const request = require('request')
var fs = require('fs')
const { stringify } = require('querystring')
const { response } = require('express')
const app = express()
const port = 8080

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/homepage', (req, res) => {
    const options = {
        url: 'http://localhost:3000/homepage',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(options, (error, response, body) => {
        fs.writeFileSync(path.join(__dirname+'/public/HomePage.json'), body)
        res.sendFile(path.join(__dirname+'/public/index.html'))
    }).on('error', (err) => {
        console.log(err)
    })
})

app.get('/coches/:id' , function (req, res) {
    const id = req.params.id
    const options = {
        url: 'http://localhost:3000/reviews/'+id,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(options, (error, response, body) => {
        fs.writeFileSync(path.join(__dirname+'/public/Review.json'), body)
        res.sendFile(path.join(__dirname+'/public/Review.html'))
    })
})

app.get('/coches/:id/specifications', (req, res) => {
    const id = req.params.id
    const options = {
        url: 'http://localhost:3000/reviews/'+ id + '/specifications',
        headers: {
            'Content-Type': 'applications/json'
        }
    }
    request(options, (error, response, body) => {
        fs.writeFileSync(path.join(__dirname+'/public/Specifications.json'), body)
        res.sendFile(path.join(__dirname + '/public/Specifications.html'))
    })
})

app.get('/coches', function (req, res){
    res.sendFile(path.join(__dirname + "/templates/Car-Visualizer/coches.html"))
})
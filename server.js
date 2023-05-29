const express = require('express')
const port = 3000
const app = express()

app.get('/greeting', (req, res) => {
    res.send('Ey Yo Ikea Group')
})


app.get('/greeting/:name', (req, res) => {
    //console.log(req.params)
    res.send(`Wow, Hello there, ${req.params.name}`)
    })

app.listen(port, () => {
    console.log(`listening on ${port}`)
  })
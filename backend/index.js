require("dotenv").config()
const express = require('express')
const axios = require('axios')
const PORT = process.env.PORT || 8000
const app = express()
const KEY = process.env.API_TOKEN
const URL = `https://pixabay.com/api/?key=${KEY}`

app.get('/', (req, res) => {
    res.json({
        name: 'Backend api',
        version: '1.0.0',
        author: 'Graham Kenneth Katana',
    })
})

app.get('/images', (req, res) => {
    axios.get(URL).then(
        response => {
            res.json(response.data.hits)
        }
    )

})
app.get('/images/:id', async (req, res) => {
    const id = req.params.id
    axios.get(`${URL}&id=${id}`).then(
        response => {
            res.json(response.data.hits)
        }
    )

})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
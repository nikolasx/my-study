const express = require('express')

const app = express()

app.set('port', 3000)

app.get('/', (req, res) => {
    res.contentType('text/plain')
    res.send('hello world')
})

app.listen(app.get('port'), function () {
    console.log('server start ...')
})
const express = require('express')
require('./db/mongoose')

const articleRouter = require('./routes/article')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(articleRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
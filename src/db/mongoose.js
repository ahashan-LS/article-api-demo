const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:root@cluster0-9fexc.mongodb.net/mern?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
const mongoose = require('mongoose')

const Article = mongoose.model('Article', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required:true
    },
    author:{
        type: String,
        required:false,
        default: "anonymous"
    }
})

module.exports = Article
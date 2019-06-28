const express = require('express')
const Article = require('../models/article')
const router = new express.Router()

router.post('/articles', async (req, res) => {
    const article = new Article(req.body)

    try {
        await article.save()
        res.status(201).send(article)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/articles', async (req, res) => {
    try {
        const article = await Article.find({})
        res.send(article)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/articles/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const article = await Article.findById(_id)

        if (!article) {
            return res.status(404).send()
        }

        res.send(article)
    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router
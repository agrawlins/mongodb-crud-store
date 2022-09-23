const express = require('express')
const itemRouter = express.Router()
const Item = require('../models/item.js')
const mongoose = require('mongoose')

//GET ALL
itemRouter.get("/", (req, res, next) => {
    Item.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

//GET ONE
itemRouter.get("/:itemId", (req, res, next) => {
    console.log(req.body)
    Item.findById((err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

//GET BY CATEGORY
itemRouter.get("/search/category", (req, res, next) => {
    Item.find({category: req.query.category}, (err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

//POST
itemRouter.post("/", (req, res, next) => {
    const newItem = new Item(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

//PUT
itemRouter.put("/:itemId", (req, res, next) => {
    Item.findOneAndUpdate(
        {_id: req.params.itemId},
        req.body,
        {new: true},
        (err, updatedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`${updatedItem}`)
    })
})

//DELETE
itemRouter.delete("/:itemId", (req, res, next) => {
    Item.findOneAndDelete(
        {_id: req.params.itemId}, 
        (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.title} from the database!`)
    })
})

module.exports = itemRouter
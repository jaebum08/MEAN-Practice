const mongoose = require('mongoose')
const Product = mongoose.model('Product')


module.exports = {
    index: (req, res) => {
        Product.find({}, (err, product) => {
            if(err) {
                res.json({message:"Error", error:err.errors})
            } else {
                res.json({message:"Success", products:product})
            }
        })
    },
    create: (req, res) => {
        Product.create(req.body, (err, product) => {
            if(err) {
                res.json({message:"Error", error:err.errors})
            } else {
                res.json({message:"Success", products:product})
            }
        })
    },
    getOne: (req, res) => {
        Product.findById({_id:req.params.id}, (err, product) => {
            if(err) {
                res.json({message:"Error", error:err.errors})
            } else {
                res.json({message:"Success", products:product})
            }
        })
    },
    deleteOne: (req, res) => {
        Product.deleteOne({_id:req.params.id}, (err, product)=> {
            if(err) {
                res.json({message:"Error", error:err.errors})
            } else {
                res.json({message:"Success", products:product})
            }
        })
    },
    updateOne: (req, res)=> {
        Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, product) => {
            if(err) {
                res.json({message:"Error", error:err.errors})
            } else {
                res.json({message:"Success", products:product})
            }
        })
    }
}
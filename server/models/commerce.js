var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/myDatabase",{useNewUrlParser: true});

autoIncrement.initialize(connection);

var productSchema = new mongoose.Schema({
    name:{type:String, required:[true, 'Products must contain a Name'], minlength:[3, 'Products must contain a name at least three characters long.']},
    quantity:{type:Number, required:[true, 'Products must contain a quantity'], min:[0,'Product quantity must be a number greater than or equal to 0']},
    price:{type:Number, required:[true, 'Products must contain a Price'], min:[0,'Product price must be a number greater than or equal to 0']}
}, {timestamps:true})


productSchema.plugin(autoIncrement.plugin, 'Product');
mongoose.model('Product', productSchema);



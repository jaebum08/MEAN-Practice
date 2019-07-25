const mongoose = require('mongoose');
const path = require('path')
const fs = require('fs')

var module_path = path.join(__dirname, './../models')
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/myDatabase', {useNewUrlParser:true})



fs.readdirSync(module_path).forEach( (file) => {
    if(file.indexOf('.js') >=0) {
        require(module_path + '/' + file)
    }
})
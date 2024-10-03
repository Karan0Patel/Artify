const { default: mongoose } = require("mongoose");
const mongoDb = require("mongoose");


const categorySchema=new mongoDb.Schema({
    categoryName:{
        type:String,
        required:true
    },
});


const categoryData=mongoDb.model('Category',categorySchema);

module.exports =categoryData;

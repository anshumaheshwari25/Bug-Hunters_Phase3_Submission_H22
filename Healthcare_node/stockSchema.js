const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const stockSchema=new Schema({
    itemName:
    {
        type:String
    },
    itemQty:{
        type:Number
    },
    enable:{
        type:Number,
        default:1
    }
})

module.exports=mongoose.model('stock',stockSchema);
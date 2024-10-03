const { default: mongoose } = require("mongoose");
const mongoDb = require("mongoose");


const subscriptionSchema=new mongoDb.Schema({
    subscriptionPrice:{
        type:String,
        required:true
    },
    subscriptionType:{
        type:String,
        required:true
    },
    features: {
        type: [String], 
        required: true
      }
});


const SubscriptionData=mongoDb.model('Subscription',subscriptionSchema);

module.exports =SubscriptionData;
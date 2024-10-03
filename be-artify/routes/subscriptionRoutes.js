const Route=require("express").Router()
const SubscriptionController = require('../controllers/subscriptionController'); 


Route.get("/subscriptions", SubscriptionController.getSubscriptions);

module.exports = Route;

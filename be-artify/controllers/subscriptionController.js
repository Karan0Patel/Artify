const SubscriptionModel = require("../models/subscriptionModel");

const getSubscriptions = (req, res) => {
    SubscriptionModel.find()
        .then(subscriptions => {
            res.json({
                status: 200,
                success: true,
                data: subscriptions
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                status: 500,
                success: false,
                msg: "Internal server error"
            });
        });
};

module.exports = {
    getSubscriptions
};

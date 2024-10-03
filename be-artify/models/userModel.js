const { default: mongoose } = require("mongoose");
const mongoDb = require("mongoose");

const userSchema = new mongoDb.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  coverPicture: {
    type: String,
    required: false,
  },
  subscriptionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subscription",
  },
  subscriptionStartDate: {
    type: String,
    required: false,
  },
  subscriptionEndDate: {
    type: String,
    required: false,
  },
});

const UserData = mongoDb.model("User", userSchema);

module.exports = UserData;

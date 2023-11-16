const mongoose = require("mongoose")

const connection = async () => {
    //for some reason 127.0.0.1:27017
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/social_network")
        console.log("Connected to the database social_network");

    } catch (error) {

        console.log(error);
        throw new Error("We couldn't reach the database")

    }

}

module.exports = connection

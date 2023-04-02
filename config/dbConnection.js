const mongoose = require('mongoose')

const connectDB = async () => {

    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("db is connected", connect.connection.host, connect.connection.name);

    } catch (error) {
        console.log({ error: error });
        // if there is any error then exit
        process.exit(1)

    }

}
module.exports = connectDB
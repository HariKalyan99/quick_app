import mongoose from "mongoose"


const connectToMongo = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connection established to server @${conn.connection.host}`);
    } catch (error) {
        console.log("Error connecting to the mongo server", error);
    }
}


export default connectToMongo;


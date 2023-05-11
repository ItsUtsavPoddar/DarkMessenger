const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB COnnected: ${conn.connection.host}`);
  } catch (error) {
    console.log(` mongo Error: ${error.message}`);
    // process.exit();
  }
};

module.exports = connectDB;

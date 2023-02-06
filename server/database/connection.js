const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //MongoDB Cloud connection
    //mongodb connection string

    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useFindAndModify: false,
      //   useCreateIndex: true,
    });

    //Local DB
    // const con = await mongoose.connect(process.env.LOCAL_URI, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    // });

    console.log(`MongoDB connected:${con.connection.host}`);
    console.log('Connected successfully to server');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;

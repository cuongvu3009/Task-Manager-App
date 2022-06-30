const mongoose = require('mongoose');

const connectDB = async (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log('DB connected');
};

module.exports = connectDB;

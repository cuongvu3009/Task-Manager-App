const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

require('dotenv').config();

//	middleware
app.use(express.static('./public'));
app.use(express.json());

//	router
app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/v1/tasks', tasks);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    console.log('DB connected');
  } catch (error) {
    console.log(error);
  }
};

start();

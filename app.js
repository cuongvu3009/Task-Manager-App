const express = require('express');
const app = express();
require('dotenv').config();

const notFound = require('./middlewares/notFound');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');

const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

//	middlewares
app.use(express.static('./public'));
app.use(express.json());

//	routes
app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

import express from 'express';
import { bookRouter } from './controller/bookController';
// import { customerRouter } from './controller/customerController';
// import { orderRouter } from './controller/orderController';

const app = express();
const PORT = process.env.PORT || 3000;

// Register routers
app.use('/books', bookRouter);
// app.use('/customers', customerRouter);
// app.use('/orders', orderRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

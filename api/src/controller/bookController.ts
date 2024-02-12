import express from 'express'
import {getAllBooks} from '../services/bookService'

export const bookRouter = express.Router();

bookRouter.get('/', async (req, res)=>{
    try{
    const books = await getAllBooks();
    res.json(books);
}catch(error:unknown){
    if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
}
})

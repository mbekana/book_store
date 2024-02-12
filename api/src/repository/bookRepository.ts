import {Book} from '../entity/Book'
// import db from '../config/database'
const { getPool } = require('../config/db_config');
import { Cover } from '../entity/Cover';

export async function getAllBooks():Promise<Book[]>{
    try{
        const query = "SELECT * FROM books";
        const {rows} = await getPool.query(query);
        return rows;
    }catch(error){
        throw new Error("Failed to fetch books from database");
    }
}

export async function getCoversByBookId(bookId: number): Promise<Cover[]> {
    try {
      const query = 'SELECT * FROM covers WHERE book_id = $1';
      const { rows } = await getPool.query(query, [bookId]);
      return rows;
    } catch (error) {
      throw new Error('Failed to fetch covers from database');
    }
  }
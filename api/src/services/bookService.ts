import {Book} from '../entity/Book';
import {getAllBooks as getAllBooksFromRepository} from '../repository/bookRepository'

export async function getAllBooks(): Promise<Book[]>{
    try{
        const books = await getAllBooksFromRepository();
        return books;
    }catch(error){
        throw new Error("Failed to fetch books!")
    }
}
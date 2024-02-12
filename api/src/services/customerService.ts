import { Customer } from '../entity/Customer';
import {getAllCustomers as getAllBooksFromRepository, createCustomer as createCustomerFromRepository} from '../repository/customerRepository'

export async function getAllCustomers(): Promise<Customer[]>{
    try{
        const books = await getAllCustomers();
        return books;
    }catch(error){
        throw new Error("Failed to fetch customer!")
    }
}

export async function createCustomer():Promise<Customer>{
    try{
        const user = await createCustomerFromRepository();
        return user;
    }catch(error){
        throw new Error("Failed to create customer")
    }
}
import {Customer} from '../entity/Customer'
const { getClient } = require('../config/db_config');


export async function getAllCustomers():Promise<Customer[]>{
    try{
        const query = "SELECT * FROM customers";
        const {rows} = await getClient.query(query);
        return rows;
    }catch(error){
        throw new Error("Failed to fetch customers from database");
    }
}

export async function createCustomer(): Promise<Customer>{
    try{
        const query = "";
        const {row} =  await getClient.query(query);
        return row;
    }catch(error){
        throw new Error("Failed to create customer");
    }
}

// export async function createCustomer(customer:Customer):Promise<Customer>{
//     try{
//         const query = "INSERT INTO customers(id, ";
//         const customer = await db.cre
//     }catch(error){
//         throw new Error("Failed to create customer.")
//     }
// }
// export async function getCoversByBookId(bookId: number): Promise<Cover[]> {
//     try {
//       const query = 'SELECT * FROM covers WHERE book_id = $1';
//       const { rows } = await db.query(query, [bookId]);
//       return rows;
//     } catch (error) {
//       throw new Error('Failed to fetch covers from database');
//     }
//   }
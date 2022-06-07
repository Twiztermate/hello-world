import {Injectable} from @angular/core;
import {customer} from '..models/customer.model';
class customer{
    
        name: string ="";
        email: string = "";
        phone: string = "";
        address: string = "";
        age: number= "";
        dateOfBirth: Date = new Date();
        IsActive: boolean = true;

        constuctor() {}
        getAllCustomers(){
            const allCustomers: customer[] = [
                {name: 'peter', email: 'peter@gmail.com', phone: '08031232343', age: 55}
            ]
            return allCustomers;
        }

}
export default customer;
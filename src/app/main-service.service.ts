import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse}from '@angular/common/http';
import { catchError, Observable,throwError } from 'rxjs';
import { Book } from './books';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  //Book Services
  getBookList():Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:3000/Books')
    .pipe(catchError(this.handleError));
  }

  

  getBook(id:number):Observable<Book>{
    return this.http.get<Book>(`http://localhost:3000/Books/${id}`)
    .pipe(catchError(this.handleError));
  }


  addEditBook(book:Book):Observable<Book>{
 if(!book.id || book.id===0 ){
    return this.http.post<Book>(`http://localhost:3000/Books`,book)
    .pipe(catchError(this.handleError));
    }else
    {
      return this.http.put<Book>(`http://localhost:3000/Books/${book.id}`,book)
    .pipe(catchError(this.handleError));
    }
    
  }


  deleteBook(id:number){
    return this.http.delete(`http://localhost:3000/Books/${id}`)
    .pipe(catchError(this.handleError));
  }

  //Customer Hub services
  getCutomerList():Observable<Customer[]>{
    return this.http.get<Customer[]>('https://localhost:5001/Customers')
    .pipe(catchError(this.handleError));
  }
  getCutomerListByAge(age:number):Observable<Customer[]>{
    return this.http.get<Customer[]>(`https://localhost:5001/Customers/${age}`)
    .pipe(catchError(this.handleError));
  }

  deleteCutomer(customerid:string){
    return this.http.delete(`https://localhost:5001/Customers/${customerid}`)
    .pipe(catchError(this.handleError));
  }

  addEditCustomer(customer:Customer):Observable<Customer>{
    if(!customer.customerId ){
       return this.http.post<Customer>(`https://localhost:5001/Customers/`,customer)
       .pipe(catchError(this.handleError));
       }else
       {
         return this.http.patch<Customer>(`https://localhost:5001/Customers/${customer.customerId}`,customer)
       .pipe(catchError(this.handleError));
       }       
     }

     getCustomer(customerid:string):Observable<Customer>{
      return this.http.get<Customer>(`https://localhost:5001/Customers/${customerid}`)
      .pipe(catchError(this.handleError));
    }

  handleError( error:HttpErrorResponse)
  {
    if(error.status===0)
    {
      console.error('There is an error at clint side:',error.error);
    }else {
      console.error('Error occured',error.error);
      
    }
    return throwError(`Something is not good, please try again later.[ Call Stack: ${error.message}]`);
  }

  constructor(private http:HttpClient) { }
}

import { Component, OnInit } from '@angular/core';
import { Book } from '../books';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Book[]=[]
  displayError!:string;

  getEmployee()
  {
    this.service.getBookList().subscribe(obj=>
      {
        debugger;
        this.books=obj;
        this.displayError="";

      }
      ,
      error=>
         this.displayError=error   
        
      );
  }
  onDelete(id:number)
  {
    
    if(confirm(`Do you wish to Delete the Book record with ID is #${id}?`))
    {
      this.service.deleteBook(id).subscribe();
      this.getEmployee();
    }
  }
  constructor(private service:MainServiceService) { }

  ngOnInit(): void {
    this.getEmployee();
  }

}

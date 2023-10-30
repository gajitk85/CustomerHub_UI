import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../books';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  constructor(private _service:MainServiceService,
    private router: Router,private route:ActivatedRoute) { }
    book:Book=new Book();
    displayError:string="";
    
  addEditBook()
  {
    this._service.addEditBook(this.book).subscribe( c =>
      this.router.navigate(['/home']),
      error=>
         this.displayError=error      
      );
  }

 
  ngOnInit(): void {
    
    const idParam = this.route.snapshot.paramMap.get('id');
  if(!idParam)
  {}else{
    let bookid=Number(idParam);
    this._service.getBook(bookid).subscribe(d =>
      this.book=d
      );
    }
    
  
    
  }

}

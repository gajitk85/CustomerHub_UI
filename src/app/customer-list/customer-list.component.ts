
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers:Customer[]=[]
  displayError!:string;

  getCutomer()
  {    
    this.service.getCutomerList().subscribe(obj=>
      {
        
        this.customers=obj;
        this.displayError="";

      }
      ,
      error=>
         this.displayError=error   
        
      );
  }
  
  onDelete(id:string)
  {    
    if(confirm(`Do you wish to Delete the Customer with ID #${id}?`))
    {
      this.service.deleteCutomer(id).subscribe();
      this.getCutomer();
    }
  }
  constructor(private service:MainServiceService,
    private router: Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    // const idParam = this.route.snapshot.paramMap.get('age');
    this.activeRoute.params.subscribe(routeParams => {      
    if(!routeParams['age'])
    {
      this.getCutomer();

    }else{
      let age:number=Number(routeParams['age']);
      this.service.getCutomerListByAge(age).subscribe(obj=>
        {
          
          this.customers=obj;
          this.displayError="";
  
        }
        ,
        error=>
           this.displayError=error   
          
        );
      }
    });     
    
  }

}

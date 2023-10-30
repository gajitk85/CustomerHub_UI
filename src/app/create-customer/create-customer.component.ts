import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private _service:MainServiceService,
    private router: Router,private route:ActivatedRoute) { }
    customer:Customer=new Customer();
    displayError:string="";
    
    addEditCustomer()
  {
    this._service.addEditCustomer(this.customer).subscribe( c =>
      this.router.navigate(['/customerhome']),
      error=>
         this.displayError=error      
      );
  }

  ngOnInit(): void {    
    const idParam = this.route.snapshot.paramMap.get('id');
  if(!idParam)
  {}else{
    let customerId:any=idParam;
    this._service.getCustomer(customerId).subscribe(d =>
      this.customer=d
      );
    }
  }

}

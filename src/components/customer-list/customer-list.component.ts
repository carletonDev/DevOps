import { Component, OnInit, OnDestroy} from '@angular/core';
import {CustomersService} from '../../api/customers.service';
import { DatatableComponent } from '../datatable/datatable.component';
import { Customer } from 'src';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent extends DatatableComponent  implements OnInit{
//construct class call extends component set name of data table to userlist
constructor(private customerService :CustomersService){ super();   
  this.name="UserList";
}
//


//onitilization set data 

ngOnInit(){ 
this.customerService.getCustomer().subscribe((response)=>{
  //set the rows array to customers response
  this.rows=response;
  //extract keys from api json
  var keys = Object.keys(response[0]);
  //create columns
  this.columns.push({prop:keys[0]});
 //slice the array and store the elements for columns
  var slice = keys.slice(1);
  slice.forEach(element => {
    this.columns.push({name:element});
  });
  }
)
}


}

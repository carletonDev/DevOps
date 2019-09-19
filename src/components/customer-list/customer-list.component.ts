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
rows = [];
settings = {
  columns: {
    customerId: {
      title: 'ID'
    },
    nameStyle: {
      title: 'Styles'
    },
    title: {
      title: 'Title'
    },
    firstName: {
      title: 'FirstName'
    },
    middleName:{
      title:'Middle'
    },
    lastName:{
      title:'Last'
    },
    suffix:{
      title:'Suffix'
    },
    companyName:{
      title:'Company'
    },
    salesPerson:{
      title:'SalesPerson'
    },
    emailAddress:{
      title:'Email'
    },
    phone:{
      title:'Phone'
    },
    passwordHash:{
      title:'Hash'
    },
    passwordSalt:{
      title:'Salt'
    },
    rowguid:{
      title:'GUID'
    },
    modifiedDate:{
      title:'ModifiedDate'
    },
    customerAddress:{
      title:'Customer Address'
    },
    salesOrderHeader:{
      title:'Sales Order '
    }
  }
};
constructor(private customerService :CustomersService){ super(); this.name="UserList";}

//onitilization set data 
async GetRows(){
 this.customerService.getCustomer().subscribe(response => this.rows = response)
 }

ngOnInit(){this.GetRows();}
}
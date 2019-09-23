import { Component, OnInit} from '@angular/core';
import {CustomersService} from '../../api/customers.service';
import { DatatableComponent } from '../datatable/datatable.component';
import { OktaAuthService } from '@okta/okta-angular';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent extends DatatableComponent  implements OnInit{
//construct class call extends component set name of data table to userlist
name:string="UserList"
rows=[];
col=[];
dtOptions={};
headers:string[];
//can use settings variable for ng2 smart table to work just need to uncomment inputs

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
constructor(private customerService :CustomersService, private oktaAuth:OktaAuthService){super()}
//onitilization set data 
 GetRows(){
this.customerService.defaultHeaders.append('Authorization','Bearer'+this.GetToken())
 this.customerService.getCustomer().subscribe(response => {
this.rows = response;
this.GetCol(this.rows)
this.dtOptions={
  ajax:this.rows,
  columns:this.col
}
})
 }
 async GetToken(){
   const accessToken = await this.oktaAuth.getAccessToken();
  return accessToken
 }
 //method that sets up the columns to display in the array properly formatted can be changed to remove 
 //user id by just slicing at the begininng instead of using id as a prop ngx data table
GetCol(data){
  var keys = Object.keys(data[0]);
  keys.forEach(element=>{
    this.col.push({title:element,data:element})
  })
}
//on initalization subscribe to http GET service
ngOnInit(){this.GetRows();
}
}
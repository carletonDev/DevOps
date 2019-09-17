import { Component, OnInit} from '@angular/core';
import {CustomersService} from '../../api/customers.service';
import { DatatableComponent } from '../datatable/datatable.component';
import { Customer } from 'src';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent extends DatatableComponent implements OnInit {
//inject service into component
customers:Customer[]

constructor(private customerService :CustomersService){
super();
 }
//create async function to get customer data 
async GetCustomers(){
super.data=await this.customerService.getCustomer().toPromise();
console.log(super.data)
}
//on initalization run async function
  ngOnInit() {
    this.GetCustomers();  
  }

}

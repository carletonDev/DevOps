import { Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs';



@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
 
  rows=[];
  columns =[];
  public name:string;

 
}
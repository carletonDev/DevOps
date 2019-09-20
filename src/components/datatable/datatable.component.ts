import { Component, Input} from '@angular/core';


@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
//in order for an abstract component to recieve data it either needs to bind to the selector using input or 
// an event emitter output like on click
export class DatatableComponent{
 @Input() rows=[];
  @Input() settings={}; // just in case you want to use ng2 smart table upt to you
  @Input() name:string;
  @Input() columns=[]
  @Input() dtOptions={};
  loadingIndicator = true;
  reorderable = true;
 
  constructor(){
  }

}
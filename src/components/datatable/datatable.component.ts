import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
 
  dtOptions:DataTables.Settings={};
  data:any=[];
  columns:any=[];
  title:string

  
CreateColumns(data){
  var keys= Object.keys(data[0]);
  for(var x=0;x<keys.length;x++){
    this.columns.push({title:keys[x],data:keys[x]})
  }
  console.log(this.columns);
  console.log(this.data);
}

  ngOnInit(): void {
  this.CreateColumns(this.data)
  this.dtOptions={
  data:this.data,
  columns:this.columns
}
  }

  
}
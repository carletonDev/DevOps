import { Component, OnInit } from '@angular/core';
import { DatatableComponent } from '../datatable/datatable.component';
import { ProductsService } from 'src/api/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends DatatableComponent implements OnInit {

  rows=[];
  settings={
    columns:{
      productId:{
        title:'ID'
      },
      name:{
        title:'Name'
      },
      productNumber:{
        title:'ProductNo'
      },
      color:{
        title:'Color'
      },
      standardCost:{
        title:'Standard Cost'
      },
      listPrice:{
        title:'Price'
      },
      size:{
        title:'Size'
      },
      weight:{
        title:'Weight'
      },
      productCategoryId:{
        title:'PCatId'
      },
      productModelId:{
        title:'ProductMoId'
      },
      sellStartDate:{
        title:'Sell Start'
      },
      sellEndDate:{
        title:'Sell End'
      },
      discontinuedDate:{
        title:'Discontinued'
      },
      thumbNailPhoto:{
        title:'Photo'
      },
      thumbnailPhotoFileName:{
        title:'FileName'
      },
      rowguid:{
        title:'GUID'
      },
      modifiedDate:{
        title:'Date Mod'
      },
      productCategory:{
        title:'PCategory'
      },
      productModel:{
        title:'PModel'
      },
      salesOrderDetail:{
        title:'Details'
      }
    }
  };
  constructor( private productService: ProductsService) { 
    super();
  }
GetRows(){
  this.productService.getProduct().subscribe(data =>{
    this.rows=data;
  });
}
  ngOnInit() {
    this.GetRows();
  }

}

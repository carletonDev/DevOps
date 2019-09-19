import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Configuration } from '../configuration';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AddressesService } from '../api/addresses.service';
import { CustomerAddressesService } from '../api/customerAddresses.service';
import { CustomersService } from '../api/customers.service';
import { ErrorLogsService } from '../api/errorLogs.service';
import { ProductCategoriesService } from '../api/productCategories.service';
import { ProductDescriptionsService } from '../api/productDescriptions.service';
import { ProductModelProductDescriptionsService } from '../api/productModelProductDescriptions.service';
import { ProductModelsService } from '../api/productModels.service';
import { ProductsService } from '../api/products.service';
import { SalesOrderDetailsService } from '../api/salesOrderDetails.service';
import { SalesOrderHeadersService } from '../api/salesOrderHeaders.service';
import { ValuesService } from '../api/values.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerListComponent } from '../components/customer-list/customer-list.component';
import { DatatableComponent } from '../components/datatable/datatable.component';
import { DataTablesModule } from 'angular-datatables';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    DatatableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataTablesModule,
    Ng2TableModule,
    NgxDatatableModule
  ],
  providers: [
    AddressesService,
    CustomerAddressesService,
    CustomersService,
    ErrorLogsService,
    ProductCategoriesService,
    ProductDescriptionsService,
    ProductModelProductDescriptionsService,
    ProductModelsService,
    ProductsService,
    SalesOrderDetailsService,
    SalesOrderHeadersService,
    ValuesService
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { 
  public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
    return {
        ngModule: AppModule,
        providers: [ { provide: Configuration, useFactory: configurationFactory } ]
    };
}

constructor( @Optional() @SkipSelf() parentModule: AppModule,
             @Optional() http: HttpClient) {
    if (parentModule) {
        throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
        throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
}
}

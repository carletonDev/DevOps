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
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTablesModule } from 'angular-datatables';
import { FlexLayoutModule } from "@angular/flex-layout";
import {OktaAuthModule} from '@okta/okta-angular';
import { LoginComponent } from '../components/login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from '../components/home/home.component';
import { ProductListComponent } from 'src/components/product-list/product-list.component';
const config = {
  issuer: 'https://dev-430760.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa1e3b2v6LlO1yCN357',
  pkce: true
}
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    DatatableComponent,
    LoginComponent,
    HomeComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    DataTablesModule,
    FlexLayoutModule,
    OktaAuthModule.initAuth(config),
    MDBBootstrapModule.forRoot()
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

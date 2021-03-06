/**
 * AdventureWorksAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CustomerAddress } from './customerAddress';
import { SalesOrderHeader } from './salesOrderHeader';


export interface Customer { 
    customerId?: number;
    nameStyle?: boolean;
    title?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    suffix?: string;
    companyName?: string;
    salesPerson?: string;
    emailAddress?: string;
    phone?: string;
    passwordHash?: string;
    passwordSalt?: string;
    rowguid?: string;
    modifiedDate?: Date;
    customerAddress?: Array<CustomerAddress>;
    salesOrderHeader?: Array<SalesOrderHeader>;
}

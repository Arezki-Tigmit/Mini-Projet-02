import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddProductComponent } from './products/Compenets/add-product/add-product.component';
import { ListProductsComponent } from './products/Compenets/list-products/list-products.component';
import { InfoProductComponent } from './products/Compenets/info-product/info-product.component';
import { ModifiePrductComponent } from './products/Compenets/modifie-prduct/modifie-prduct.component';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListProductsComponent,
    InfoProductComponent,
    ModifiePrductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
    
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

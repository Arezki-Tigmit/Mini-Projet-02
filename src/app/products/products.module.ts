import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AddProductComponent } from '../Compenets/add-product/add-product.component';
import { InfoProductComponent } from '../Compenets/info-product/info-product.component';
import { ModifiePrductComponent } from '../Compenets/modifie-prduct/modifie-prduct.component';

const Routes: Routes = [{
  path: '', children: [
    {path: 'addProduct', component: AddProductComponent},
    {path: ':id', children: [
      {path: 'ModifieProduct', component: ModifiePrductComponent},
      {path: 'InfosProduct', component: InfoProductComponent}
    ]}

  ] 
}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }

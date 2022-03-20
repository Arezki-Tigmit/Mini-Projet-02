import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Compenets/add-product/add-product.component';
import { InfoProductComponent } from './Compenets/info-product/info-product.component';
import { ListProductsComponent } from './Compenets/list-products/list-products.component';
import { ModifiePrductComponent } from './Compenets/modifie-prduct/modifie-prduct.component';
import { ProductsModule } from './products/products.module';

const routes: Routes=[
  {path: '', component: ListProductsComponent,
    children: [
               {path: 'AddProduct', component: AddProductComponent},
               {path: 'ListProducts', component: ListProductsComponent,
                   children: [
                             {path: ':id/ModifieProduct', component: ModifiePrductComponent},
                             {path: ':id/InfoProduct', component: InfoProductComponent}
                              ]}
              ]}]
                   
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

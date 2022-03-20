import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produit } from 'src/app/Model/Produit';
import { ProduitService } from 'src/app/services/produit.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { InfoProductComponent } from '../info-product/info-product.component';
import { ModifiePrductComponent } from '../modifie-prduct/modifie-prduct.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listeProduit!: Produit[];
  displayedColumns: string[] = ['id', 'nom', 'unite', 'prix','action'];
  
  
  constructor(private produitServicet: ProduitService, private matDialog: MatDialog) {
    this.produitServicet.getProduit().subscribe((data: Produit[])=> this.listeProduit= data);
   }

  ngOnInit(): void {

  }

  openDialogAfficher(element: Produit) {
   this.matDialog.open(InfoProductComponent
    , {
      data: element
      });
  }
  openDialogAjouter(){
    this.matDialog.open(AddProductComponent);

  }
  
  openDialogModifier(element: Produit) {
    this.matDialog.open(ModifiePrductComponent
     , {
       data: element
       });
   }


}

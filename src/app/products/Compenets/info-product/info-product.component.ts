import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produit } from 'src/app/Model/Produit';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data: Produit) { }

  ngOnInit(): void {
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produit } from 'src/app/Model/Produit';
import { ProduitService } from 'src/app/services/produit.service';

export interface Unite{

  value: string;
  viewValue: string;

}

@Component({
  selector: 'app-modifie-prduct',
  templateUrl: './modifie-prduct.component.html',
  styleUrls: ['./modifie-prduct.component.css']
})
export class ModifiePrductComponent implements OnInit {
  produitFormGroup!: FormGroup;
  
  selectedUnite!: string;
  valueUnite: Unite[]=[
    {value: 'kg', viewValue: 'kg'},
    {value: 'm', viewValue: 'Metre'},
    {value: 'cm', viewValue: 'Centimetre'},
    {value: 'L', viewValue: 'litres'},]
  

  constructor(private fb: FormBuilder, private productSrevice: ProduitService, 
    @Inject (MAT_DIALOG_DATA) public data: Produit
) { }

  ngOnInit(): void {
    this.produitFormGroup= this.fb.group({
      id: [],
      nom: ['',Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]*$/)])],
      unite: [],
      prix: ['', Validators.required],
      dateDispo:[],
      statut: [],
      description:[],
      


    });
  }
  

  modifierProduit(){
    
    
    console.log('produit', this.produitFormGroup.getRawValue());
    this.productSrevice.putProduit(this.produitFormGroup.getRawValue(),this.data.id).
    subscribe(
      {
        next: (res)=>{alert('Modifide successfully!')},
        error: ()=>{alert('erreure!')}
      }
    );



  }
  
}

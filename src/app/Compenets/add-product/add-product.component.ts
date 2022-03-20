import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitService } from 'src/app/services/produit.service';


export interface Unite{

  value: string;
  viewValue: string;

}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  produitFormGroup!: FormGroup;
  selectedUnite!: string;

  valueUnite: Unite[]=[
    {value: 'kg', viewValue: 'kg'},
    {value: 'm', viewValue: 'Metre'},
    {value: 'cm', viewValue: 'Centimetre'},
    {value: 'L', viewValue: 'litres'},]
  
  
  constructor(private fb: FormBuilder, private productSrevice: ProduitService) { }

  ngOnInit(): void {
    this.produitFormGroup= this.fb.group({
      id: [],
      nom: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]*$/)])],
      unite: [],
      prix: ['', Validators.required],
      dateDispo:[],
      statut: [],
      description:[],
      

      


    });
    //this.produitFormGroup.controls['id'].disable()
  }

  addProduit(){

    console.log('produit', this.produitFormGroup.getRawValue());
    this.productSrevice.postProduit(this.produitFormGroup.getRawValue()).
    subscribe(
      {
        next: (res)=>{alert('Added successfully!')},
        error: ()=>{alert('erreure!')}
      }
    );
    


  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/prod';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {

  constructor(private prodserv : ProductsService, private route : ActivatedRoute,
              private router : Router,private prodServ : ProductsService) { }

  prodForm! : FormGroup;
  prodId! : string;
  prodObj! : Iproduct;
  isEditMode : boolean = false;

  ngOnInit(): void {
    this.createForm()
    this.prodId = this.route.snapshot.params['productId'];
    console.log(this.prodId)

    if(this.prodId){
    this.isEditMode=true
    this.prodObj = this.prodserv.fetcProduct(this.prodId);
    console.log(this.prodObj);
    
    this.prodForm.patchValue(this.prodObj)
    console.log(this.route.queryParams)
      
    this.route.queryParams
    .subscribe(res => {
      if(res['canReturn']==0){
        this.prodForm.disable()
      }
      else{
        this.prodForm.enable()
      }
    })

    }
    else{
      this.isEditMode = false;
    }
  }

  createForm(){
    this.prodForm = new FormGroup({
      pName : new FormControl(null,[Validators.required]),
      pStatus : new FormControl(null,[Validators.required])
    })
  }

  onProductUpdate(){
    let updateObj = {...this.prodForm.value, pId : this.prodId};
    console.log(updateObj);
    this.prodserv.updateProduct(updateObj);
    this.router.navigate(['/products']);
    
  }
  onProductAdd(){
    let prod = {...this.prodForm.value, prodId : this.prodServ.uuid()};
    this.prodserv.onAddProduct(prod);
    this.router.navigate(['/products'])
  }
}

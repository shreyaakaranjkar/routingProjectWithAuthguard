import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/prod';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  prodId! : string;
  prodObj! : Iproduct;

  constructor(private route : ActivatedRoute, private prodServ : ProductsService) { }

  ngOnInit(): void {
  //   this.prodId = this.route.snapshot.params['productId'];
  //   console.log(this.prodId);
  //  this.prodObj= this.prodServ.fetcProduct(this.prodId);
  //  console.log(this.prodObj)

  this.route.params
  .subscribe(res => {
    this.prodId = res['productId']
    this.prodObj = this.prodServ.fetcProduct(this.prodId)
  })
  }

  onDeleteProduct(pId : string){
    console.log(pId)
    this.prodServ.removeProduct(pId)
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/prod';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selId! : string;
  msgData! : string

  productsInfo! : Array<Iproduct>
  constructor(private prodServ : ProductsService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.productsInfo = this.prodServ.fetchProducts();

    console.log(this.route.snapshot.data)
    this.msgData = this.route.snapshot.data['msg']
  }
  
}

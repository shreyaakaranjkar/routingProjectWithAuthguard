import { Injectable } from '@angular/core';
import { Iproduct } from '../models/prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  productsArr :Array<Iproduct>= [
    {
      pName : 'Samsung',
      pId : '101',
      pStatus : 'Progress',
      canReturn : 0
    },
    {
      pName : 'Vivo',
      pId : '102',
      pStatus : 'Dispatched',
      canReturn : 1
    },
    {
      pName : 'Iphone',
      pId : '103',
      pStatus : 'Delivered',
      canReturn : 1
    },
    {
      pName : 'Asus',
      pId : '104',
      pStatus : 'Delivered',
      canReturn : 0
    }
  ]

  fetchProducts(){
    return this.productsArr
  }

  fetcProduct(id : string):Iproduct{
    return this.productsArr.find(prod => prod.pId === id) as Iproduct
  }

  onAddProduct(prod : Iproduct):void{
    this.productsArr.push(prod)
  }

  updateProduct(updatedObj:Iproduct){
    // this.productsArr.forEach(prod => {
    //   if(prod.pId === updatedObj.pId){
    //     prod = updatedObj;
    //   }
    // })

    let getIndex = this.productsArr.findIndex(prod => prod.pId === updatedObj.pId);
    this.productsArr[getIndex] = updatedObj;
    console.log(this.productsArr)
  }
  removeProduct(pId : string){
   let getDelId =  this.productsArr.findIndex(prod => prod.pId === pId)
   this.productsArr.splice(getDelId,1)
  }

  uuid(){
    // Get the current time in milliseconds since the Unix epoch.
    var dt = new Date().getTime();
    // Replace the placeholders in the UUID template with random hexadecimal characters.
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        // Generate a random hexadecimal digit.
        var r = (dt + Math.random()*16)%16 | 0;
        // Update dt to simulate passage of time for the next random character.
        dt = Math.floor(dt/16);
        // Replace 'x' with a random digit and 'y' with a specific digit (4 for UUID version 4).
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    // Return the generated UUID.
    return uuid;
}
}

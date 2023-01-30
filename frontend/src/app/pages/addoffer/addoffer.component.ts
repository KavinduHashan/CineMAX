import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent {
  offer_Array : any[] = [];
  offerid = "";

  description: string ="";
  price: string ="";

  constructor(private http: HttpClient )
  {
    this.getOffer();
  }

  getOffer()
  {
    this.http.get("http://localhost:3000/offer/getAll")
    .subscribe((result: any)=>
    {
        console.log(result);
        this.offer_Array = result.data;
    });
  }

  setEdit(data: any)
  {
    this.description = data.description;
    this.price = data.price;

    this.offerid = data._id;
  }

  add()
  {
    if(this.offerid == '')
    {
        this.addfn();
    }
  }

  addfn()
  {
    let bData =
    {
      "description" : this.description,
      "price" : this.price,
    };
    this.http.post("http://localhost:3000/offer/create",bData).subscribe((resData: any)=>
    {
        console.log(resData);
        alert("Offer Added Successfully...!")
        this.description = '';
        this.price = '';
        this.getOffer();
    });
  }

    deletefn(data: any){
      this.http.delete("http://localhost:3000/offer/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert(" Offer deleted")
        this.getOffer();

    });

    };

  };





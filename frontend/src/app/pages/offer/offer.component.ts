import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {

  offer_Array : any[] = [];
  // stid = "";

  // name: string ="";
  // address: string ="";

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
}

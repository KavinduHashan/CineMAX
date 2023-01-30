import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showbooking',
  templateUrl: './showbooking.component.html',
  styleUrls: ['./showbooking.component.css']
})
export class ShowbookingComponent {

  bookingArray : any[] = [];
  id = "";

  username: string ="";
  phone: string ="";
  moviename: string ="";
  date: string ="";
  time: string ="";
  persons: string ="";

  constructor(private http: HttpClient )
  {
    this.getbooking();
  }

  getbooking()
  {
    this.http.get("http://localhost:3000/booking/getAll")
    .subscribe((r: any)=>
    {

        console.log(r);
        this.bookingArray = r.data;
    });
  }


setDel(deletedata: any)
  {
    this.http.delete("http://localhost:3000/booking/delete"+ "/"+ deletedata._id).subscribe((resData: any)=>
    {
        console.log(resData);
        alert("Deleted Successfully..!")
        this.getbooking();

    });
  }

}

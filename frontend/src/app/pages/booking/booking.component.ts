import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  em_Array : any[] = [];
  ID = "";

  username: string ="";
  phone: string ="";
  moviename: String ="";
  date: string ="";
  time: string ="";
  persons: string = "";

  constructor(private http: HttpClient )
  {
    this.getUserDetails();
  }

  getUserDetails()
  {
    this.http.get("http://localhost:3000/booking/getAll")
    .subscribe((result: any)=>
    {
        console.log(result);
        this.em_Array = result.data;
    });
  }

  setUpdate(data: any)
  {
    this.username = data.username;
    this.phone = data.phone;
    this.moviename = data.moviename;
    this.date = data.date;
    this.time = data.time;
    this.persons = data.persons;

    this.ID = data._id;
  }

  savefunction()
  {
    if(this.ID == '')
    {
        this.add();
    }
  }

  add()
  {
    let bData =
    {
      "username" : this.username,
      "phone" : this.phone,
      "moviename" : this.moviename,
      "date" : this.date,
      "time" : this.time,
      "persons" : this.persons
    };
    this.http.post("http://localhost:3000/booking/create",bData).subscribe((resData: any)=>
    {
        console.log(resData);
        alert("Boooking Successfully...!")
        this.username = '';
        this.phone = '';
        this.moviename = '';
        this.date  = '';
        this.time  = '';
        this.persons = '';
        this.getUserDetails();


    });


  }


}

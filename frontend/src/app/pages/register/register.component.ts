import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

// register
export class RegisterComponent {

  em_Array : any[] = [];
  ID = "";

  name: string ="";
  address: string ="";
  email: String ="";
  mobile: string ="";
  username: string ="";
  password: string ="";

  constructor(private http: HttpClient, private router: Router )
  {
    this.getUserDetails();
  }

  getUserDetails()
  {
    this.http.get("http://localhost:3000/user/getAll")
    .subscribe((result: any)=>
    {
        console.log(result);
        this.em_Array = result.data;
    });
  }

  setUpdate(data: any)
  {
    this.name = data.name;
    this.address = data.address;
    this.email = data.email;
    this.mobile = data.mobile;
    this.username = data.username;
    this.password = data.password;

    this.ID = data._id;
  }

  savefunction()
  {
    if(this.ID == '')
    {
        this.regfn();
    }
  }

  regfn()
  {
    let bData =
    {
      "name" : this.name,
      "address" : this.address,
      "email" : this.email,
      "mobile" : this.mobile,
      "username" : this.username,
      "password" : this.password
    };
    this.http.post("http://localhost:3000/user/create",bData).subscribe((resData: any)=>
    {
        console.log(resData);
        alert("User Registration Successfully...!")
        this.router.navigate(['login']);
        this.name = '';
        this.address = '';
        this.email = '';
        this.mobile  = '';
        this.username  = '';
        this.password  = '';
        this.getUserDetails();


    });

  }
};


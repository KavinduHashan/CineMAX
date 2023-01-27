import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-register',
  templateUrl: './show-register.component.html',
  styleUrls: ['./show-register.component.css']
})
export class ShowRegisterComponent {

  Array : any[] = [];
  stid = "";

  name: string ="";
  address: string ="";
  email: string = "";
  mobile: string ="";
  username: string="";

  constructor(private http: HttpClient )
  {
    this.getUserDB();
  }

  getUserDB()
  {
    this.http.get("http://localhost:3000/user/getAll")
    .subscribe((result: any)=>
    {

        console.log(result);
        this.Array = result.data;
    });
  }


//   setUpdate(data: any)
//   {
//     this.name = data.name;
//     this.address = data.address;
//     this.email = data.email;
//     this.mobile = data.mobile;
//     this.username = data.username;

//     this.stid = data._id;
//   }



//   UpdateRecords()
//   {
//     let bData =
//     {
//       "name" : this.name,
//       "address" : this.address,
//       "email": this.email,
//       "mobile" : this.mobile,
//       "username": this.username
//     };
//     this.http.patch("http://localhost:9000/user/update"+ "/"+this.stid,bData).subscribe((resultData: any)=>
//     {
//         console.log(resultData);
//         alert("Updated Successfully..!")
//         this.getUserDB();
//     });
//   }



  setDelete(deletedata: any)
  {
    this.http.delete("http://localhost:3000/user/delete"+ "/"+ deletedata._id).subscribe((resData: any)=>
    {
        console.log(resData);
        alert("Deleted Successfully..!")
        this.getUserDB();

    });
  }
}


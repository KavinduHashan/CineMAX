import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-feedback',
  templateUrl: './show-feedback.component.html',
  styleUrls: ['./show-feedback.component.css']
})
export class ShowFeedbackComponent {

  fdArray : any[] = [];
  stid = "";

  feedback: string ="";

  constructor(private http: HttpClient )
  {
    this.getfd();
  }

  getfd()
  {
    this.http.get("http://localhost:3000/userfeedback/getAll")
    .subscribe((r: any)=>
    {

        console.log(r);
        this.fdArray = r.data;
    });
  }


setDel(deletedata: any)
  {
    this.http.delete("http://localhost:3000/userfeedback/delete"+ "/"+ deletedata._id).subscribe((resData: any)=>
    {
        console.log(resData);
        alert("Deleted Successfully..!")
        this.getfd();

    });
  }
}

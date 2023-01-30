import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  em_Array : any[] = [];
  fd = "";

 feedback: string ="";

  constructor(private http: HttpClient )
  {
    this.getUserFeedback();
  }

  getUserFeedback()
  {
    this.http.get("http://localhost:3000/userfeedback/getAll")
    .subscribe((result: any)=>
    {
        console.log(result);
        this.em_Array = result.data;
    });
  }

  setfeedback(data: any)
  {
    this.feedback = data.feedback;

    this.fd = data._id;
  }

  sendfeedbackfunction()
  {
    if(this.fd == '')
    {
        this.feedbackfn();
    }
  }

 feedbackfn()
  {
    let sendfeedback =
    {
      "feedback" : this.feedback,
    };
    this.http.post("http://localhost:3000/userfeedback/create",sendfeedback).subscribe((rData: any)=>
    {
        console.log(rData);
        alert("Thank you for your feedback..!")
        this.feedback = '';
        this.getUserFeedback();
    });
}
}

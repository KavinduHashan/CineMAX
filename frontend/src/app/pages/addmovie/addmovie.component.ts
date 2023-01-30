import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent {
  movie_Array : any[] = [];
  ID = "";

  moviename: string ="";
  startdate: string ="";
  enddate: string ="";
  time: string ="";

  constructor(private http: HttpClient )
  {
    this.getmovie();
  }

  getmovie()
  {
    this.http.get("http://localhost:3000/movie/getAll")
    .subscribe((result: any)=>
    {
        console.log(result);
        this.movie_Array = result.data;
    });
  }

  setEdit(data: any)
  {
    this.moviename = data.moviename;
    this.startdate = data.startdate;
    this.enddate = data.enddate;
    this.time = data.time;

    this.ID = data._id;
  }

  editfn(data: any){
    let bodyData =
  {
    "moviename" : this.moviename,
    "startdate" : this.startdate,
    "enddate" : this.enddate,
    "time" : this.time
  };
  this.http.patch("http://localhost:3000/movie/update"+ "/"+this.ID,bodyData).subscribe((resultData: any)=>
  {
      console.log(resultData);
      alert("Movie Updated")
      this.getmovie();
  });

  }

  add()
  {
    if(this.ID == '')
    {
        this.addfn();
    }
  }

  addfn()
  {
    let bData =
    {
      "moviename" : this.moviename,
      "startdate" : this.startdate,
      "enddate" : this.enddate,
      "time" : this.time
    };
    this.http.post("http://localhost:3000/movie/create",bData).subscribe((resData: any)=>
    {
        console.log(resData);
        alert("Movie Added Successfully...!")
        this.moviename = '';
        this.startdate = '';
        this.enddate = '';
        this.time = '';

        this.getmovie();


    });
  }



    deletefn(data: any){
      this.http.delete("http://localhost:3000/movie/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Movie deleted")
        this.getmovie();

    });

    };

  };





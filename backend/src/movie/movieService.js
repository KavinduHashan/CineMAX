const movieModel = require('./movieModel');

module.exports.getMovie = () => {
    return new Promise(function checkURL(resolve, reject) {
 
        movieModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 


    }).catch(error => {
         
    });
 }



 module.exports.createMovie = (movieDetails) => {
    return new Promise(function myFn(resolve, reject) {
 
        const movieModelData = new movieModel();
 
        movieModelData.moviename = movieDetails.moviename;
        movieModelData.startdate = movieDetails.startdate;
        movieModelData.enddate = movieDetails.enddate;
        movieModelData.time = movieDetails.time;

        movieModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    }).catch(error => {
         
    });
 }


 module.exports.removeMovie = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        movieModel.findByIdAndDelete(id, function returnData(error, result) {
 
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    }).catch(error => {
         
    });
 
 }

const bookingModel = require('./bookingModel');

module.exports.getbooking = () => {
    return new Promise(function checkURL(resolve, reject) {
 
        bookingModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 


    }).catch(error => {
         
    });
 }



 module.exports.createbooking = (bookingDetails) => {
    return new Promise(function myFn(resolve, reject) {
 
        const bookingModelData = new bookingModel();

        bookingModelData.username = bookingDetails.username;
        bookingModelData.phone = bookingDetails.phone;
        bookingModelData.moviename = bookingDetails.moviename;
        bookingModelData.date = bookingDetails.date;
        bookingModelData.time = bookingDetails.time;
        bookingModelData.persons = bookingDetails.persons;

        bookingModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    }).catch(error => {
         
    });
 }


 module.exports.removebooking = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        bookingModel.findByIdAndDelete(id, function returnData(error, result) {
 
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

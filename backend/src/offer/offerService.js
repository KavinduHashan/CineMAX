const ofm = require('./offerModel');

module.exports.getOffer = () => {
    return new Promise(function checkURL(resolve, reject) {
 
        ofm.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
    }).catch(error => {
         
    });
 }



 module.exports.createOffer = (offerDetails) => {
    return new Promise(function myFn(resolve, reject) {
 
        const offerModelData = new ofm();

        offerModelData.description = offerDetails.description;
        offerModelData.price = offerDetails.price;

        offerModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    }).catch(error => {
         
    });
 }


 module.exports.removeOffer = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        ofm.findByIdAndDelete(id, function returnData(error, result) {
 
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

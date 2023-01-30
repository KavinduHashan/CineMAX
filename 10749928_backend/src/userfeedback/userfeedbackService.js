const userfeedbackModel = require('./userfeedbackModel');

module.exports.getDataFromDB = () => {
    return new Promise(function checkURL(resolve, reject) 
    { 
        userfeedbackModel.find({}, function returnDATA(error, result) {
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
    });
}

// user feedback
// module.exports.createUserFeedback = (feedbackdetails) => {
//     return new Promise(function fn(resolve, reject) {
 
//         const userfeedbackModelData = new userfeedbackModel();
 
//         userfeedbackModelData.feedback = feedbackdetails.feedback;

//         userfeedbackModelData.save(function result(err, result) {
 
//             if (err) {
//                 reject(false);
//             } else {
//                 resolve(result);
//             }
//         })
 
//     });
    
// }

module.exports.createUserFeedback = (feedbackdetail) => {
    return new Promise(function fn(resolve, reject) {
 
        const userfeedbackModelData = new userfeedbackModel();
 
        userfeedbackModelData.feedback = feedbackdetail.feedback;

        userfeedbackModelData.save(function result(err, result) {
 
            if (err) {
                reject(false);
            } else {
                resolve(result);
            }
        })
 
      }).catch(error => {
         
    });
};

module.exports.removefd = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        userfeedbackModel.findByIdAndDelete(id, function returnData(error, result) {
 
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
 
 }

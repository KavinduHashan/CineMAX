const userModel = require('./userModel');

module.exports.getDataFromDB = () => {
    return new Promise(function checkURL(resolve, reject) 
    { 
        userModel.find({}, function returnDATA(error, result) {
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
    });
}

// user registration
module.exports.createUserRegister = (regDetails) => {
    return new Promise(function fn(resolve, reject) {
 
        const userModelData = new userModel();
 
        userModelData.name = regDetails.name;
        userModelData.address = regDetails.address;
        userModelData.email = regDetails.email;
        userModelData.mobile = regDetails.mobile;
        userModelData.username = regDetails.username;
        userModelData.password = regDetails.password;

        userModelData.save(function result(err, result) {
 
            if (err) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
}




//  module.exports.updateUser = (id,upDetails) => {     
//     console.log(upDetails);
//     return new Promise(function myFn(resolve, reject) {
//         userModel.findByIdAndUpdate(id,upDetails, function returnData(error, result) {
//           if(error)
//           {
//                 reject(false);
//           }
//           else
//           {
//              resolve(result);
//           }
//         });
 
//     });
//  }


 
 module.exports.removeUser = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(id, function returnData(error, result) {
 
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

// login
 module.exports.loginUserService = async (username, password) => {
    try {
        const user = await userModel.findOne({username: username, password: password})
         return user;
    } catch(e) {
        throw e
    }
 }
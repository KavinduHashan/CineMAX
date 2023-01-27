const userServicejs = require('./userService');

const getDataConntrollerfn = async (req, res) =>
{
    const emp = await userServicejs.getDataFromDB();
    res.send({ "status": true, "data": emp });
}

// register
const createUserRegisterControllerFn = async (req, res) => 
{
    const s = await userServicejs.createUserRegister(req.body);
    if (s) {
        res.send({ "status": true, "message": "User Register successfully" });
    } else {
        res.send({ "status": false, "message": "User not register" });
    }
}


// const updateUserControllerfn = async (req, res) => 
// {
    // console.log(req.params.id);
    // console.log(req.body);
     
    // var result = await userService.updateUser(req.params.id,req.body);

    //  if (result) {
    //     res.send({ "status": true, "message": "User Updateeeedddddd"} );
    //  } else {
    //      res.send({ "status": false, "message": "User Updateeeedddddd Faileddddddd" });
    //  }
// }


// show user regi
const deleteUserControllerfn = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userServicejs.removeUser(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "User Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
     }
}


// login
const userLoginControllerfn = async(req, res) => {
    try {
        const username = req.body["username"]
        const password = req.body["password"]

    const user = await userServicejs.loginUserService(username, password)

    if(user) {      
        res.status(200).json({
            message: {
                username: user.username
            }
        })
    } else {        
        res.status(401).send({
            messgae: "Unauthorized"
        })
    }
    } catch(e) {
        
        res.status(500).send({
            message: "Internal server error"
        })
    }
}


module.exports = { 
    getDataConntrollerfn, 
    createUserRegisterControllerFn,
    deleteUserControllerfn,
    userLoginControllerfn
};
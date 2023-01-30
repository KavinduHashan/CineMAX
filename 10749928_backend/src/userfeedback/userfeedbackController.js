const userfbServicejs = require('./userfeedbackService');

const getDataConntrollerfn = async (req, res) =>
{
    const emp = await userfbServicejs.getDataFromDB();
    res.send({ "status": true, "data": emp });
}

//user feedback
// const createUserFeedbackControllerFn = async (req, res) => 
// {
//     const s = await userServicejs.createUserFeedback(req.body);
//     if (s) {
//         res.send({ "status": true, "message": "Thank you for your feedback..!" });
//     } else {
//         res.send({ "status": false, "message": "ERR" });
//     }
// }
const createUserFeedbackControllerFn =  (req, res) => 
{
    const s =  userfbServicejs.createUserFeedback(req.body);
    if (s) {
        res.send({ "status": true, "message": "Thank you for your feedback..!" });
    } else {
        res.send({ "status": false, "message": "ERR" });
    }
}

const deleteFeedbackControllerfn = async (req, res) => 
{
     console.log(req.params.id);
     const result = await userfbServicejs.removefd(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "Deleteddd Faileddddddd" });
     }
}

module.exports = { 
    getDataConntrollerfn,
    createUserFeedbackControllerFn,
    deleteFeedbackControllerfn
};
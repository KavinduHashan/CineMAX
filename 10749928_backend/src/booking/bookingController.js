const bookingService = require('./bookingService');

const getbookingfn = async (req, res) =>
{
    const m = await bookingService.getbooking();
    res.send({ "status": true, "data": m });
}


// add
const createbookingfn = async (req, res) => 
{
    const status = await bookingService.createbooking(req.body);
    if (status) {
        res.send({ "status": true, "message": "Booking Added successfully" });
    } else {
        res.send({ "status": false, "message": "Error" });
    }
}


const removebookingfn = async (req, res) => 
{
     console.log(req.params.id);
     const result = await bookingService.removebooking(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Booking Deleted successfully"} );
     } else {
         res.send({ "status": false, "message": "Failed" });
     }
}


module.exports = { getbookingfn, createbookingfn,removebookingfn};
const offerService = require('./offerService');

const getOfferfn = async (req, res) =>
{
    const off = await offerService.getOffer();
    res.send({ "status": true, "data": off });
}


// add
const createOfferfn = async (req, res) => 
{
    const status = await offerService.createOffer(req.body);
    if (status) {
        res.send({ "status": true, "message": "Offer Created successfully" });
    } else {
        res.send({ "status": false, "message": "Error" });
    }
}


const removeOfferfn = async (req, res) => 
{
     console.log(req.params.id);
     const result = await offerService.removeOffer(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Movie Deleted successfully"} );
     } else {
         res.send({ "status": false, "message": "Failed" });
     }
}


module.exports = { getOfferfn, createOfferfn,removeOfferfn};
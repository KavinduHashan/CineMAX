const movieService = require('./movieService');

const getMoviefn = async (req, res) =>
{
    const m = await movieService.getMovie();
    res.send({ "status": true, "data": m });
}


// add
const createMoviefn = async (req, res) => 
{
    const status = await movieService.createMovie(req.body);
    if (status) {
        res.send({ "status": true, "message": "Movie Added successfully" });
    } else {
        res.send({ "status": false, "message": "Error" });
    }
}


const removeMoviefn = async (req, res) => 
{
     console.log(req.params.id);
     const result = await movieService.removeMovie(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Movie Deleted successfully"} );
     } else {
         res.send({ "status": false, "message": "Failed" });
     }
}


module.exports = { getMoviefn, createMoviefn,removeMoviefn};
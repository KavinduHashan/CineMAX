const express = require('express');

const router = express.Router();

const userController = require('../src/user/userController');

const userfeedbackController = require('../src/userfeedback/userfeedbackController');

const bookingController = require('../src/booking/bookingController');

const offerController = require('../src/offer/offerController');

const movieController = require('../src/movie/movieController');



//register
router.route('/user/login').post(userController.userLoginControllerfn); 
router.route('/user/create').post(userController.createUserRegisterControllerFn);
router.route('/user/getAll').get(userController.getDataConntrollerfn);
router.route('/user/delete/:id').delete(userController.deleteUserControllerfn);
// router.route('/user/update/:id').patch(userController.updateUserControllerfn);


// movie
router.route('/movie/create').post(movieController.createMoviefn);
router.route('/movie/getAll').get(movieController.getMoviefn);
router.route('/movie/delete/:id').delete(movieController.removeMoviefn);


// feedback 
router.route('/userfeedback/getAll').get(userfeedbackController.getDataConntrollerfn);
router.route('/userfeedback/create').post(userfeedbackController.createUserFeedbackControllerFn);
router.route('/userfeedback/delete/:id').delete(userfeedbackController.deleteFeedbackControllerfn);


 // booking
router.route('/booking/getAll').get(bookingController.getbookingfn);
router.route('/booking/create').post(bookingController.createbookingfn);
router.route('/booking/delete/:id').delete(bookingController.removebookingfn);


// offer
router.route('/offer/getAll').get(offerController.getOfferfn);
router.route('/offer/create').post(offerController.createOfferfn);
router.route('/offer/delete/:id').delete(offerController.removeOfferfn);


module.exports = router;
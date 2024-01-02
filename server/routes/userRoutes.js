const express = require('express');
const { loginController, registerController, authController, applyDoctorController } = require('../controllers/UserCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

//router onject
const router = express.Router()

//routes
//LOGIN || POST
router.post('/login', loginController);

//REGISTER || POST
router.post('/register', registerController);

//Auth || POST
router.post('/getUserData', authMiddleware , authController);

//Apply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

module.exports = router;

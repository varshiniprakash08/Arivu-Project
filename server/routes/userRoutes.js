const express = require('express');
const { getUserData, updateUserData, getInstitutionData, updateInstitutionData } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');  // JWT authentication middleware

const router = express.Router();

// Route for getting user data (for student/teacher/institution)
router.get('/:id', authMiddleware, getUserData);

// Route for updating user data (for student/teacher/institution)
router.put('/:id', authMiddleware, updateUserData);

// Route for getting institution data (students, teachers, resources)
router.get('/institution/:id', authMiddleware, getInstitutionData);

// Route for updating institution data (students, teachers, etc.)
router.put('/institution/:id', authMiddleware, updateInstitutionData);

module.exports = router;

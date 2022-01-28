const constant = require(__basePath + 'app/config/constant');
const router = require('express').Router({ caseSensitive: true, strict: true});
const userController = require(constant.path.moduleV1 + '/user/userController');
const userValidations = require(constant.path.moduleV1 + '/user/userValidations');

router.post('/signUp', userValidations.signUpValidation , userController.signUp );

module.exports = {
    router : router
}
const constant = require(__basePath + 'app/config/constant');
const response = require(constant.path.app + 'util/response');
const { writeLogInfo, writeLogErrorTrace } = require(constant.path.app + 'util/logger');
const { hash, validate } = require(constant.path.app + 'util/password');

const UserModel = require(constant.path.app + 'models/users');

exports.ping = function (req, res, next) {
	return res.status(200).json(response.build('SUCCESS', 'PONG'));
}

exports.signUp = async function( req, res, next ) {
    try {
        requestBody = req.body

        userObject = {}
        userObject['firstName'] = requestBody['firstName']
        userObject['lastName'] = requestBody['lastName']
        userObject['email'] = requestBody['email']

        writeLogInfo(['[signup]', '[controller] called for: ', userObject ]);

        req.body.password = hash(req.body.password);
        
        let ifAlreadyExists = await UserModel.findOne({ "email" : requestBody['email']})
        if ( ifAlreadyExists ) {
            return res.status(400).json(response.build("EMAIL_ALREADY_EXISTS", { result: null } ));
        }

        let userDoc = await UserModel.create( { ...userObject, "password" : req.body.password } );

        return res.status(200).json(response.build('SUCCESS', userDoc ));
    
    } catch (error) {
        writeLogErrorTrace(['[signup]', '[controller] Error: ', error]);
        return res.status(500).json(response.build('ERROR_SERVER_ERROR', {error: error}));
    }

}

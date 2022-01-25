const constant = require(__basePath + 'app/config/constant');
const config = require(constant.path.app + 'config/configuration');
const messagePrefix = "APP_MESSAGES:";

/**
 * Build API Response
 * @param {String} key response message suffix key
 * @param {Object} res Result object
 * @returns {Object}
 */
module.exports.build = function (key, response) {
    const error = (response && response.error) || {};
    const responseObj = config.get(messagePrefix + error.message) || config.get(messagePrefix + key) || config.get(messagePrefix + "ERROR_SERVER_ERROR");

    return {
        status: key === 'SUCCESS',
        statusCode: responseObj.errorCode,
        statusMessage: responseObj.message,
        responseCode: responseObj.statusCode,
        response: response || {}
    };
};
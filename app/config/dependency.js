const express         = require('express');
const cookieParser    = require('cookie-parser');
const swaggerDocument = require('./swagger.json');
const swaggerUi       = require('swagger-ui-express');
const constant        = require(__basePath + 'app/config/constant');
const publicDir       = require('path').join(constant.path.app,'/public');

var options = {
    explorer        : true,
    customCss       : '.swagger-ui .topbar a{background-image: url(' + constant.path.rilImg + ');background-size: cover;height: 50px;min-height: 36px;max-width: 150px;} .topbar-wrapper a img{display:none;}',
    customSiteTitle : 'Ril',
    customFavIcon   : constant.path.faviconImg,
};

module.exports = (app) => {
    app.use(cookieParser());
    app.use(express.static(publicDir));
    
    //Registring Controller Modules
    app.use('/registry/api/v1/docs',    swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
    app.use('/registry/api/v1/monitor', require(constant.path.module + 'v1/monitor').router);
    app.use('/registry/api/v1/upload', require(constant.path.module + 'v1/uploadDocument').router);
};
require('dotenv').config();
module.exports = function() {
    return {
        environment: process.env.MY_ENVIRONMENT || "development",
        imgsrv: process.env.IMAGE_SERVER_ENDPOINT
    };
};
  
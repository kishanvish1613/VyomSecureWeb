const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    GOOGLE_PRIVATE_KEY: process.env.private_key,
    GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.client_email,
}
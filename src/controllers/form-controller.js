const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY } = require('../config/serverConfig');

const submitForm = async (req, res) => {
    try {
        const { name, email, message } = req.body; // Extract data from the form

        const serviceAccountAuth = new JWT({
            email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet('1w5YdfL76fTIZKha6EXCbFeJRX1UNGBXOBKiCmNxJJY0', serviceAccountAuth);

        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0]; // Use the first sheet

        // Add a new row
        await sheet.addRow({ Name: name, Email: email, Message: message });

        return res.status(200).json({
            success: true,
            message: 'Form data submitted successfully!',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to submit form data',
            error: error,
        });
    }
};

module.exports = {
    submitForm
};

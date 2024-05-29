const express = require('express');
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // to parse form data

// Serve the signup.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

// Handle form submission with validation
app.post('/submit', [
    body('name').notEmpty().withMessage('Name is required').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Redirect to error page with errors
        return res.redirect(`/error?messages=${JSON.stringify(errors.array())}`);
    }
    // Redirect to success page
    res.redirect('/success');
});

// Serve success page
app.get('/success', (req, res) => {
    res.send('<h1>Signup Successful</h1>');
});

// Serve error page
app.get('/error', (req, res) => {
    const messages = JSON.parse(req.query.messages);
    res.send(`<h1>Signup Failed</h1><p>${messages.map(m => m.msg).join('<br>')}</p>`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
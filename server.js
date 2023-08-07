const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/social-network-db', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});
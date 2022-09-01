const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//middleware
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

const port = process.env.PORT || 5025;

app.listen(port, () =>
    console.log(`Server is listening on port ${port}...`)
);
const express = require('express')
const app = express();
const shelterRoutes = require('./routes/shelters')
const dogRoutes = require('./routes/dogs')


// This is needed because this tells you that when you do
// /shelters, it will route you to the shelterRoutes which 
// wwe exported from the shelters.js file
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes)

// This is really good because instead of us having to put
// all our routes handling here (so it would be the 4 routes
// from shelter and the 4 routes from dogs), we can put them
// in seperate files in a folder, then call that file from 
// the main index file.

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})
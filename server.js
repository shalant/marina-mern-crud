const express = require('express');
const app = express();
const cors = require('cors');
const mongose = require('mongoose');
const port = 3001;

//connect to mongodb
mongose.connect('mongodb+srv://doug:blah@cluster0.fn3us.mongodb.net/newitemsdb?retryWrites=true&w=majority')

//data schema
const itemSchema = {
    title: String,
    description: String
}

//data model
const Item = mongoose.model('Item', itemSchema)

//read route
app.get('/items', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create route

//delete route

//update route

app.listen(port, function () {
    console.log('express is running')
})
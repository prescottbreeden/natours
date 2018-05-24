// - - - - = = = = Configurations = = = = - - - - 

// express
const express = require('express');
const app = express();

// path
const path = require('path');

// body parser
const bodyParser = require('body-parser');

// middleware
app.use(express.static(__dirname + '/client/dist/client'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

// - - - - = = = = Model = = = = - - - - //
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean_belt');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

//-----------------------//
//------ pet schema -----//
//-----------------------//

const petSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Pet name is required'],
        minlength: [3, 'Pet name must be at least than 3 characters'],
        unique: true
    },
    category: {
        type: String,
        lowercase: true,
        required: [true, 'Pet type is required'],
        minlength: [3, 'Pet type must be at least 3 characters']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [true, 'Description must be at least 3 characters']
    },
    skills: {
        skill1: {type: String},
        skill2: {type: String},
        skill3: {type: String}
    },
    likes: {type: Number, default: 0}
}, { timestamps: true });

const Pet = mongoose.model('Pet', petSchema);

// - - - - = = = = Controller = = = = - - - - 

const petController = {
    index: (request, response) => {
  
        Pet.find({}).sort({category: 1})
            .then(result => response.json( {message: "success", data: result} ))
            .catch(error => response.json( {message: "error", errors: error } ));
    },
    getOne: (request, response) => {

        Pet.findOne({_id: request.params.id})
            .then(result => response.json( {message: "success", data: result} ))
            .catch(error => response.json( {message: "error", errors: error}));
    },
    create: (request, response) => {
        const newPet = new Pet(request.body)
        Pet.create(newPet)
            .then(result => response.json( {message: "success", data: result} ))
            .catch(error => response.json( {message: "error", errors: error} ));
    },
    edit: (request, response) => {

        Pet.findByIdAndUpdate({_id: request.params.id}, request.body, {upsert: true, new: true, runValidators: true})
            .then(result => response.json( {message: "success", data: result} ))
            .catch(error => response.json( {message: "error", errors: error} ));
    },
    delete: (request, response) => {

        Pet.deleteOne({_id: request.params.id})
            .then(result => response.json( {message: "success", data: result} ))
            .catch(error => response.json( {message: "error", errors: error} ));
    }
  };
  
  // - - - - = = = = Routes = = = = - - - - 
  app 
    .get('/api/powder', petController.index)
    .post('/api/powder', petController.create)
    .get('/api/powder/:id', petController.getOne)
    .put('/api/powder/:id', petController.edit)
    .delete('/api/powder/:id', petController.delete)
    .all("*", (req,res,next) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


const port = 9000;
app.listen(port => console.log('Express listening on port 9000...'));
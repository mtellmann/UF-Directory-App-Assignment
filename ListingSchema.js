/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here */
  updated_at: {type: Date},
  created_at: {type: Date},
  code: {type: String, required: true, unique: true},
  name: {type: String, required: true, unique:true},
  coordinates: {longitude: String, latitude: String},
  address: String
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  /* your code here */
  var now= new Date();
  this.updated_at =now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;

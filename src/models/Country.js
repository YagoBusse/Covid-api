const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  statuscode:{
      type: Number,
      required: true
  },
  description:{
    type: String,
    required: true
  }
   
   
});

const Country = mongoose.model('Country', CountrySchema);
module.exports = Country;
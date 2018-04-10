var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
    Title: String,
    Location: String,
    Description: String,
    Date: Date,
    Status: ['Open', 'Close']
});

var Job = mongoose.model('Jobs', jobSchema);

module.exports = Job;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    FirstName: String,
    LastName: String,
    Location: String,
    Description: String,
    Date: Date,
    Email: String,
    Status: ['New', 'Junior', 'Senior']
});

userSchema.methods.Name = function(){
    return `${this.FirstName} ${this.LastName}`;
};

var User = mongoose.model('Users', userSchema);

module.exports = User;
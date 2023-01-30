const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema consists of only on string which is the username
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 4,
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

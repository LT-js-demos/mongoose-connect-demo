var mongoose = require('mongoose');
require('./db.js');
var Book = mongoose.model('Book');//Book为model name

var book = new Book({
    name: 'Hello World',
    author: 'Leonard',
    publishTime: new Date()
});

book.save(function (err) {
    console.log('save status:',err ? 'failed' : 'success');
});
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongodb-connect-demo');

//在Schma里定义数据类型
var BookSchma = new mongoose.Schema({ //定义一个Schema
    name: String,
    author: String,
    publishTime:Date
});

mongoose.model('Book',BookSchma);//将该Schema发布为Model
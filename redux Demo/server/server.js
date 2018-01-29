const express = require('express');
const mongoose = require('mongoose');
//链接mongo 并且使用react 这个集合
const DB_URL = 'mongodb://localhost:27017/react'
mongoose.connect(DB_URL)
mongoose.connection.on("connection",function(){
	console.log("mongo connect success")
})
// 新建类似表结构
const User = mongoose.model("user",new mongoose.Schema({
	user:{type:String,require:true},
	age:{type:Number,require:true}
}))
//新增数据
// User.create({
// 	user:'2',
// 	age:3
// },function(err,doc){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(doc)
// 	}
// })
//删除数据
User.remove({age:1},function(err,doc){
	if(!err){
		console.log("success")
	}
	
})


//查询数据
const app = express();

app.get('/',function(req,res){
	res.send('<h1>ndjd</h1>')
})
app.get('/a',function(req,res){
	User.find({},function(err,doc){
		res.json(doc)
	})
	// res.json({name:"dxiusggh大吼大叫j"})
})
app.listen(8080,function(){
	console.log("port 8080");
})

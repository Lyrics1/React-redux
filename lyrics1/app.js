const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');



const app = express();

// parse application/x-www-form-urlencoded  数据格式化
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// app.use(express.static(path.join(__dirname,'public')));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.post('/submit',(req,res)=>{
	console.log(req.params,req.body)
	res.send("ll")
	const id = 1;
	const data = req.body.content;

	console.log("准备存储文件");
	fs.writeFile(`File/${id}.txt`,data,(err)=>{
		if(err){
			console.log("文件存储有问题：",err);
			return ;
		}
		console.log("存储文件成功");
	})


	
	//读取文件
	fs.readFile(`File/${id}.txt`,'utf-8',(err,data)=>{
		if(err){
			console.log("文件读取有问题：",err);
			return ;
		}
		console.log("读取文件成功",data);
	})





})

app.listen(3300,()=>console.log("3300"))


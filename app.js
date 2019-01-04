let express = require('express');
let path = require('path');
let router = require('./router.js')
let app = express();

//获取静态资源；
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

//01 引入ejs
var ejs = require('ejs'); //我是新引入的ejs插件
//02 设置模板文件的存放路径
app.set('views', path.join(__dirname, 'views','page'));
// 032. 创建一个自己的模板引擎，用来识别后缀是 html 的模板文件
app.engine('html', ejs.__express);
// 04. 使用刚才自己创建的这个模板引擎
app.set('view engine', 'html');


app.use(router)
// app.get('/index',(req,res)=>{
//     res.render('index', { name: 'ejs'})
// })

app.listen('8060',()=>{
    console.log("实例:http://localhost:8060/index");
})
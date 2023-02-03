const express = require('express')
const app = express()
const router = require('./14路由模块化')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
//用于解析post传来的urlencoded数据
app.use(express.urlencoded({extended : false}))
//一定要在路由之前使用，用于解决跨域问题
const cors = require('cors')
app.use(cors())

app.use(router)
app.listen(80,()=>{
    console.log('http://192.168.124.8 is running');
})
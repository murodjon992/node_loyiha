const express= require('express');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const {PORT} = require('../config');
const mongoose = require('./modules/mongoose');

const app = express();
app.listen(PORT, () => console.log(`server ishladi http://localhost:${PORT}`));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


// middlawares

app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(cookieParser())
app.use(fileUpload())

app.use('/public', express.static(path.join(__dirname, 'public')))
mongoose()

fs.readdir(path.join(__dirname, 'routes'), (err, files)  =>  {
    if(!err){
        files.forEach(file =>{
            const routePath = path.join(__dirname,'routes', file)
            const route = require(routePath)

            if (route.path && route.router) {
                app.use(route.path, route.router)
            }
        })
    }
})
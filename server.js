const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose= require('mongoose');
//konfigurasi body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);

// setup server
const PORT= process.env.PORT || 3000;
// koneksi ke database
mongoose.connect('mongodb://localhost:27017/first-apiku',{useNewUrlParser: true});

// setup API Route
const router=  express.Router();
// route semua denga prefix/api
app.use('/api', router);
// test router
router.get('/',(req,res) => res.json({message:'selmat datang di api ku'}));
// fire up server
app.listen(PORT,() => console.log(`server berjalan pada port ${PORT}`));

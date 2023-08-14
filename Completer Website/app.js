const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/PerlesContactForm');

  const contactSchema = new mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    Email: String,
    Phone: String,
    Country:String,
    Subject: String,
    Message: String,
  });
  const Contact = mongoose.model('Contact', contactSchema);

//EXPRESS CONFIG
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//PUG CONFIG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//ENDPOINTS
app.get('/', (req,res)=>{
    const parameters = {};
    res.status(200).render('home.pug', parameters);
})
app.get('/boutique', (req,res)=>{
    const parameters = {};
    res.status(200).render('boutique.pug', parameters);
})
app.get('/bags', (req,res)=>{
    const parameters = {};
    res.status(200).render('bags.pug', parameters);
})
app.get('/rings', (req,res)=>{
    const parameters = {};
    res.status(200).render('rings.pug', parameters);
})
app.get('/menfrag', (req,res)=>{
    const parameters = {};
    res.status(200).render('menfrag.pug', parameters);
})
app.get('/womenfrag', (req,res)=>{
    const parameters = {};
    res.status(200).render('womenfrag.pug', parameters);
})
app.get('/menwatch', (req,res)=>{
    const parameters = {};
    res.status(200).render('menwatch.pug', parameters);
})
app.get('/womenwatch', (req,res)=>{
    const parameters = {};
    res.status(200).render('womenwatch.pug', parameters);
})
app.get('/menshoe', (req,res)=>{
    const parameters = {};
    res.status(200).render('menshoe.pug', parameters);
})
app.get('/womenshoe', (req,res)=>{
    const parameters = {};
    res.status(200).render('womenshoe.pug', parameters);
})
app.get('/purse', (req,res)=>{
    const parameters = {};
    res.status(200).render('purse.pug', parameters);
})
app.get('/wallet', (req,res)=>{
    const parameters = {};
    res.status(200).render('wallet.pug', parameters);
})





// contact form
app.get('/contact', (req,res)=>{
    const parameters = {};
    res.status(200).render('contact.pug', parameters);
})
app.post('/contact', (req,res)=>{
    var ContactData = new Contact(req.body);
    ContactData.save().then(()=>{
        res.status(200).render('home.pug');
    }).catch(()=>{
        res.status(400).send("There was some error. Try again later")
    });
})

//SERVER STARTING
app.listen(port, ()=>{
    console.log(`Application started successfully on port ${port}`);
});

}
const express = require('express');
const app = express();
// const cookiesession = require('cookie-session');
const port=3000;
const {Booth, Index, Item, Reviews, User} = require('./models');
app.use(express.static('public'));
app.set('view engine', 'ejs');

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// Main page with Booth names
// Booth page showing the various menu items
// Idividual item page showing photos, description and ratings/reviews
// Login page
// Registration page
// Wish list
// Tried list
// Favs list
// Error page

app.listen(port, function(req, res){
    console.log(`Listening on port ${port}`);
})

app.get('*', function(req, res){
    res.render('index');
})

app.get("/", async function(req, res){
    let theReviews = await Reviews.findAll();
    console.log('theReviews')
    res.render('index');
})







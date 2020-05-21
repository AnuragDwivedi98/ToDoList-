//jshint esversion:6
const express = require('express');
const bodyPaser = require('body-parser');

const app = express();
let items = ["Buy food", "Cook food", "Eat food"];
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month:"long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay : day, newListItems: items});

});
app.get("/about", function(req, res){
  res.render("about");
});

app.post("/", function(req, res){
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
})


app.listen(3002, function(){
  console.log("Server started on port 3002.");
});

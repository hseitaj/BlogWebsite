//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const homeStartingContent = "Welcome to the Daily Journal, your go-to platform for sharing and discovering fascinating stories and ideas. Here, we believe in the power of expression and the magic that unfolds when words come alive. Explore a myriad of posts, dive into different perspectives, and perhaps, unveil a new realm of imagination. Your journey through a world curated by thoughts and experiences begins here.";
const aboutContent = "The Daily Journal was founded with a simple yet profound mission - to create a space where thoughts can flourish and writers can share their insights with the world. Over the years, we've grown into a community that thrives on diverse ideas and the inherent beauty of personal narratives. Our platform is built on the principles of open expression, curiosity, and a deep appreciation for the art of storytelling.";
const contactContent = "We'd love to hear from you! Whether you have a query, feedback, or simply wish to share your thoughts, feel free to reach out. Our team is always excited to engage with our readers and writers. You can contact us via email at contact@dailyjournal.com or drop by our office at 123 Journal St., Storyville. Let's keep the conversation going!";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//let posts = [];

mongoose.set('strictQuery', false);
// atlas link  : mongodb+srv://admin-hansi:hansi123@cluster0.40xd3aa.mongodb.net/todolistDB
//mongoose.connect('mongodb://localhost:0.0.0.0:27017/blogDB', { useNewUrlParser: true});
//password = hansi123
main().catch(err => console.log(err));

async function main() {

mongoose.connect('mongodb://0.0.0.0:27017/blogDB', { useNewUrlParser: true});
console.log("Connected with the Database.");

}

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res){

  Post.find({}, function(err, posts){
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
      });
  });
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });


  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });

});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});

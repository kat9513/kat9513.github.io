//alert("hello world");
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


var projects = [
    {   
        id: 1,
        img: "assets/images/crystal-collector.png",
        title: "Crystal Collector",
        gitHub: "https://github.com/kat9513/Crystal-Game",
        link: "https://kat9513.github.io/Crystal-Game/index.html",
    },
    {
        id: 2,
        img: "assets/images/crystal-collector.png",
        title: "Crystal Collector",
        gitHub: "https://github.com/kat9513/Crystal-Game",
        link: "https://kat9513.github.io/Crystal-Game/index.html",
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/portfolio.html"));

});

app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/contact.html"));
});


app.get("/api/projects", function (req, res) {
    return res.json(projects);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});  
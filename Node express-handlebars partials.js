/*
	Assignment # 1
	author: Faraz Iqbal

			
*/

const HTTP_PORT = process.env.PORT || 3000;

const express = require("express");											//	require express as web application framework
const exphbs = require('express-handlebars');								//	require handlebars as templating engine
const path = require("path");	
var bodyParser = require("body-parser");											//	require path for folder/file mainpulation

const app = express();
app.engine(".hbs", exphbs({ 												//	Setting module exphbs as handlebars view engine
	defaultLayout: "main",
	extname: ".hbs" 
}));
app.set("view engine", ".hbs");                                             //  Identifies(s) file with .hbs extension being the template

app.use(express.static(path.join(__dirname, '/public')));                   //  *** Identify the folders containing static files such as images and CSS files
app.use(bodyParser.json());                                                     //  support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));   


app.get("/", function(req, res){                                            //  GET  
	var value= "Artist";

	res.render('index', {                                                	//  Invokes the render method on the response (res) object while identifying index.hbs as the 																			
		data: value												//	substitute item for the {{{body}}} placeholder inside default layout (main.hbs)
	});
});

app.post("/", (req, res) => {                                                   //  Test POST method by running "express route post.htm" in browser then click submit
	var inputdata = req.body.selEmilyBlincoe;
                                       //  Requires body-parser to parse incoming request body and populate the req.body property

	if(inputdata=="")
	{
		inputdata="Artist";
	}

	res.render('index', {                                                	//  Invokes the render method on the response (res) object while identifying index.hbs as the 																			
		data: inputdata												//	substitute item for the {{{body}}} placeholder inside default layout (main.hbs)
	});

});

const server = app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});
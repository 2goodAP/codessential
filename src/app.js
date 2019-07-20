const express = require ('express');
const path = require("path");
const app = express();

//views
app.set("view-engine","ejs");
app.set("views", [path.join(__dirname, "views")],
                 [path.join(__dirname, "views/langing")],
                 [path.join(__dirname, "views/signUp")]
);

//routes
app.use('/', require('./routes/index.js'));

//public
app.use(express.static(__dirname + "/public"));

app.listen(3000, ()=>{console.log('listening to the server at port 3000.')});

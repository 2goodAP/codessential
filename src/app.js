const express = require ('express');
const path = require("path");
const {symlink, stat} = require('fs');
const app = express();

// Setting sym link for public/dist/index.html to views/editor.ejs
stat(path.join(__dirname, 'views/editor.ejs'), err => {
    if (err) {
        if (err.code == 'ENOENT') {
            symlink(path.join(__dirname, '../public/dist/index.html'),
                path.join(__dirname, 'views/editor.ejs'), err => {
                    if (err) return console.log(err);
                });
        } else {
            throw err;
        }
    }

});

// Views
app.set("view-engine","ejs");
app.set("views", [path.join(__dirname, "views")],
                 [path.join(__dirname, "views/index")],
                 [path.join(__dirname, "views/signUp")],
                 [path.join(__dirname, 'views/editor')]
);

//routes
app.use('/', require('./routes/index.js'));

//public
app.use(express.static(path.join(__dirname, '../public')));
// assets in node_modules
app.get('/codemirror.css', (req, res) => {
    res.sendFile(path.join(__dirname,
        '../node_modules/codemirror/lib/codemirror.css'));
});
app.get('/all.min', (req, res) => {
    res.sendFile(path.join(__dirname,
        '../node_modules/@fortawesome/fontawesome-free/js/all.min'));
});
app.use(express.static(path.join('../node_modules/codemirror/mode')));
app.use(express.static(path.join('../node_modules/codemirror/addon')));
app.use(express.static(path.join('../node_modules/codemirror/theme')));

app.listen(3000, () => {
    console.log('Server listening at at port 3000')
});

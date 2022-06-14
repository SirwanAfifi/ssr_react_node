import mustache from 'mustache-express';
import express from "express";
import reload from "reload"
import * as path from "path";

const app = express();

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '..', 'dist')));

reload(app).then(() => {
    app.use("**", (req, res) => {
        res.render("index");
    });

    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })
}).catch((err) => {
    console.error('Reload could not start, could not start server/sample app', err)
})

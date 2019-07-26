// Importación de express
let express = require('express')

// Importación de Body parser
let bodyParser = require('body-parser');
// Importación de Mongoose
let mongoose = require('mongoose');

// Inicilización de la app
let app = express();

app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://root:root@localhost:27017/api-rest?authSource=admin', { useNewUrlParser: true}).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


// Configurando puerto del servidor
var port = process.env.PORT || 9001;
// Enviando mensaje por default
app.get('/', (req, res) => res.send('Hello World with Express'));

// Importación de routes
let apiRoutes = require("./api-routes")
// Use Api routes in the App
app.use('/api', apiRoutes)

// Lanzando la aplicación 
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});

const express = require('express');
const app = express();
const morgan = require('morgan');



// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require('./routes/index'));
app.use("/api/helados", require('./routes/helados'));

// settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

// starting the server
app.listen(app.get("port"), () => {
    console.log('Server on port ' + app.get('port'));
});
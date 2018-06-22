
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.all('*', (req, res) => {
    res.status(200).sendFile(__dirname + '/dist/index.html')
});


app.listen(process.env.PORT || 8081);

// app.listen(process.env.PORT || 3200, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port,
//     app.settings.env);
// });


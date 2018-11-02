const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://maikel:sundin17@ds163417.mlab.com:63417/recipe-app', { useNewUrlParser: true }, (err, client) => {
    if (err) throw err

    const db = client.db('recipe-app');

    // console.log that your server is up and running
    app.listen(port, () => console.log(`Listening on port ${port}`));

    app.get('/getforms', (req, res) => {
        db.collection('forms').find().toArray(function (err, result) {
            if (err) throw err

            res.json(result);
        })
    })
})


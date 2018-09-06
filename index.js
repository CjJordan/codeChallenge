const express = require('express');
const path = require('path');

const app = express();

const docker = require('./docker');
const db = require('./models');

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './build')));

app.get('/api/points', (req, res) => {
  db.House.findAll({}).then(rows => res.json(rows)).catch(err => console.error(err));
});

app.post('/api/tests', (req, res) => {
  console.log(req.body);
  docker(req.body.code, req.body.tests)
    .then(message => {
      let success = true;

      message.forEach(result => {
        if( result.includes('FAILED') ){
          success = false;
        }
      });

      if( success ){
        db.House.update({
            points: db.sequelize.literal( "points + 1" )
          }, {
            where: {id: req.body.house_id}
        })
        .then(function(data) {
          res.json({ success, message, data });
        }).catch(error => res.json({ error }));
      } else {
        res.json({ success, message });
      }
    }).catch(error => res.json({ error }) );
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
})

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
});


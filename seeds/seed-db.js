const db = require('../models');

db.sequelize.sync().then(function() {
  db.House.bulkCreate([{
      name: 'GryffinDOM'
    }, {
      name: 'Ravenclosure'
    }, {
      name: 'Slytherindentyourcode'
    }, {
      name: 'Githubblepuff'
    }]).then(function(response) {
    console.log('Data successfully added!')
  }).catch(function(error) {
    console.log('Error', error)
  });
});
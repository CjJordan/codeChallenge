const option = process.argv[2];

const seed = {
  house() {
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
  },
  students() {
    const db = require('../models');
    const studentList = require('./student-list');
      db.sequelize.sync().then(function() {
        db.House.bulkCreate(studentList).then(function(response) {
          console.log('Data successfully added!')
        }).catch(function(error) {
          console.log('Error', error)
        });
      }); 
  }
}

if( seed[option] ) {
  seed[option]();
} else {
  console.log('Please specify either "house" or "students"\n');
}

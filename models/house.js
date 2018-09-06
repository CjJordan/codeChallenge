module.exports = function(sequelize, DataTypes) {
  const House = sequelize.define('House', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  return House;
}
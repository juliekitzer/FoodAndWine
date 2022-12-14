'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Booth.hasMany(models.Items,{
      //   foreignKey: 'boothId'
      // })
    }
  }
  Booth.init({
    boothId: DataTypes.INTEGER,
    boothName: DataTypes.STRING,
    location: DataTypes.STRING,
    itemId: DataTypes.INTEGER,
    cuisine: DataTypes.STRING,
    description: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booth',
  });
  return Booth;
};
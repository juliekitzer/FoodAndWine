'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasMany(models.Reviews,{
      foreignKey: 'itemId'
    }),
    Item.belongsTo(models.Booth,{
      foreignKey: 'itemId'
    })
  }}
  Item.init({
    boothId: DataTypes.INTEGER,
    itemName: DataTypes.STRING,
    price: DataTypes.FLOAT,
    cuisine: DataTypes.STRING,
    description: DataTypes.STRING,
    allergy_friendly: DataTypes.STRING,
    kid_friendly: DataTypes.BOOLEAN,
    contains_alcohol: DataTypes.BOOLEAN,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
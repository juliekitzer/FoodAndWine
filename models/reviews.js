'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reviews.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
      Reviews.belongsTo(models.Item, {
        foreignKey: 'itemId',
        onDelete: 'CASCADE'
      })
    }
  }
  Reviews.init({
    itemId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};


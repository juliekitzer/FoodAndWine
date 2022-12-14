'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Reviews,{
        foreignKey: 'userId'
      })
    }
  }
  User.init({
    want_it: DataTypes.BOOLEAN,
    had_it: DataTypes.BOOLEAN,
    loved_it: DataTypes.BOOLEAN,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
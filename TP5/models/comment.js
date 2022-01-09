'use strict';
const {
    Model
} = require('sequelize');
const { User } = require('./User.model');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Comment.belongsTo(models.User);
            Comment.hasOne(models.Post);
        }
    };
    Comment.init({
        content: DataTypes.STRING,
        date: DataTypes.DATE,
        author: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Comment',
    });
    return Comment;
};
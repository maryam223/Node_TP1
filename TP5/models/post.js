'use strict';
const {
    Model
} = require('sequelize');
const { User } = require('./User.model');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Post.belongsTo(models.User);
            Post.hasMany(models.Comment);
        }
    };
    Post.init({
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        date: DataTypes.DATE,
        author: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Post',
    });
    return Post;
};
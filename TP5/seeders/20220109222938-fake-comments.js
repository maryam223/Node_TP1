'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         **/
        await queryInterface.bulkInsert('Comment', [{
            content: 'azertyuiop ghnj,k; hn,;rtyu yui e.',
            date: '03/01/2022',
            author: 'John Doe'
        }], {});

    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         */
        await queryInterface.bulkDelete('Comment', null, {});

    }
};
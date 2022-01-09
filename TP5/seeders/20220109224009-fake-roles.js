'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         */
        await queryInterface.bulkInsert('People', [{
                name: 'admin'
            },
            {
                name: 'user'
            },
            {
                name: 'super-user'
            }
        ], {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         */

        await queryInterface.bulkDelete('Roles', null, {});

    }
};
'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         */

        await queryInterface.bulkInsert('User', [{
                lastname: 'Doe',
                firstname: 'John',
                email: 'johndoe@gmail.com',
                username: 'John46',
                github: 'johndoe@github.com'
            },
            {
                lastname: 'Toto',
                firstname: 'Tata',
                email: 'tototata@gmail.com',
                username: 'tOto46',
                github: 'toto@github.com'
            }
        ], {});

    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         */

        await queryInterface.bulkDelete('User', null, {});

    }
};
'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         */

        await queryInterface.bulkInsert('Posts', [{
            title: 'Wxcvbn',
            content: 'Azerty ytre sdfg hgfd ert. Terty fd ert smlk.',
            date: '12/11/21',
            author: 'Toto Tata',
        }], {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         */

        await queryInterface.bulkDelete('Posts', null, {});

    }
};
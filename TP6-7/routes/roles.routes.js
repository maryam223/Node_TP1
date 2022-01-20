const express = require('express');
const router = express.Router();

const {
    createRole,
    updateRole,
    deleteRole,
    getOneRole,
    getManyRoles,
} = require('../handlers/roles.handler.js');

const validator = require('express-joi-validation').createValidator({
    passError: true
});

const Joi = require('joi');

const roleSchema = Joi.object({
    name: Joi.required(),
});

router.post('/', validator.body(roleSchema), createRole);
router.patch('/:id', validator.body(roleSchema), updateRole);
router.delete('/:id', validator.body(roleSchema), deleteRole);
router.get('/:id', validator.response(roleSchema), getOneRole);
router.get('/', validator.response(roleSchema), getManyRoles);

module.exports = router;
const express = require('express');
const router = express.Router();

const {
    createComment,
    updateComment,
    deleteComment,
    getOneComment,
    getManyComments,
} = require('../handlers/comments.handler.js');

const validator = require('express-joi-validation').createValidator({
    passError: true
});

const Joi = require('joi');

const commentSchema = Joi.object({
    content: Joi.required(),
    date: Joi.required(),
    postId: Joi.required(),
    authorId: Joi.required(),
});

router.post('/', validator.body(commentSchema), createComment);
router.patch('/:id', validator.body(commentSchema), updateComment);
router.delete('/:id', validator.body(commentSchema), deleteComment);
router.get('/:id', validator.response(commentSchema), getOneComment);
router.get('/', validator.response(commentSchema), getManyComments);

module.exports = router;
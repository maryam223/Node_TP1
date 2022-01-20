const express = require('express');
const router = express.Router();

const {
    createPost,
    updatePost,
    deletePost,
    getOnePost,
    getManyPosts,
} = require('../handlers/posts.handler.js');

const validator = require('express-joi-validation').createValidator({
    passError: true
});

const Joi = require('joi');

const postsSchema = Joi.object({
    content: Joi.required(),
    date: Joi.required(),
    postId: Joi.required(),
    authorId: Joi.required(),
});

router.post('/', validator.body(postsSchema), createPost);
router.patch('/:id', validator.body(postsSchema), updatePost);
router.delete('/:id', validator.body(postsSchema), deletePost);
router.get('/:id', validator.response(postsSchema), validator.query(postsSchema), getOnePost);
router.get('/', validator.response(postsSchema), getManyPosts);

module.exports = router;
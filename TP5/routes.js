const User = require("./models");
const Role = require("./models");
const Comment = require("./models");
const Post = require("./models");

const { response } = require("express");


module.exports = function(app) {

    //USERS

    app.get('/create-user', (req, res) => {
        const newUser = User.create(req.body)
            .then((res) => {
                res.send("Utilisateur bien crée");
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/update-user', (req, res) => {
        const updateUser = User.update(req.body, { where: { id: req.params.id } })
            .then((res) => {
                res.send("Utilisateur bien modifié");
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/delete-user', (req, res) => {
        const deleteUser = User.destroy({ id: req.params.id })
            .then((res) => {
                res.send("Utilisateur bien supprimé");
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/show-user', (req, res) => {
        const include = req.query.showPost ? { model: Post } : include;
        const showUser = User.findOne({ where: { id: req.params.id }, include: include })
            .then((res) => {
                res.send(showUser);
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/users', (req, res) => {
        const users = User.findAll()
            .then((res) => {
                res.send(users);
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });


    //ROLES

    app.get('/create-role', (req, res) => {
        const newRole = Role.create(req.body)
            .then((res) => {
                res.send("Rôle bien crée");
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/update-role', (req, res) => {
        const updateRole = Role.update(req.body, { where: { id: req.params.id } })
            .then((res) => {
                res.send("Rôle bien modifié");
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/delete-role', (req, res) => {
        const deleteRole = Role.destroy({ id: req.params.id })
            .then((res) => {
                res.send("Rôle nien supprimé");
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/show-rôle', (req, res) => {
        const showRole = Role.findOne({ where: { id: req.params.id } })
            .then((res) => {
                res.send(showRole);
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/roles', (req, res) => {
        const roles = Role.findAll()
            .then((res) => {
                res.send(roles);
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    //COMMENTAIRES

    app.get('/create-comment', (req, res) => {
        const newComment = Comment.create(req.body)
            .then((res) => {
                res.send("Commentaire bien crée");
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/update-comment', (req, res) => {
        const updateComment = Comment.update(req.body, { where: { id: req.params.id } })
            .then((res) => {
                res.send("Commentaire bien modifié");
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/delete-comment', (req, res) => {
        const deleteComment = Comment.destroy({ id: req.params.id })
            .then((res) => {
                res.send("Commentaire bien supprimé");
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/show-comment', (req, res) => {
        const showComment = Comment.findOne({ where: { id: req.params.id } })
            .then((res) => {
                res.send(showComment);
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/comments', (req, res) => {
        const comments = Comment.findAll()
            .then((res) => {
                res.send(comments);
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });


    //POSTS

    app.get('/create-post', (req, res) => {
        const newPost = Post.create(req.body)
            .then((res) => {
                res.send("Post bien crée");
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/update-post', (req, res) => {
        const updatePost = Post.update(req.body, { where: { id: req.params.id } })
            .then((res) => {
                res.send("Post bien modifié");
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/delete-post', (req, res) => {
        const deletePost = Post.destroy({ id: req.params.id })
            .then((res) => {
                res.send("Post ien supprimé");
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/show-post', (req, res) => {
        const include = req.query.showComment ? { model: Post } : include;
        const showPost = Post.findOne({ where: { id: req.params.id }, include: include })
            .then((res) => {
                res.send(showPost);
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

    app.get('/posts', (req, res) => {
        const posts = Post.findAll()
            .then((res) => {
                res.send(posts);
            })
            .catch((err) => {
                res.status(400).send({ "message": "Bad request" });
            });
    });

}
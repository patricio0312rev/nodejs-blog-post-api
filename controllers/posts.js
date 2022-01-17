const Posts = require('../models/posts');
const { Op } = require('sequelize');

module.exports = {
    post_api: post_handler,
    get_api: get_handler
}

function post_handler(req, res) {
    let tmpdata = req.body;
    if (tmpdata.isPublished) {
        tmpdata.publishedDate = new Date().getTime();
    }
    Posts.create(tmpdata)
        .then(data => {
            res.status(201).send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Reminder."
            });
        });
};
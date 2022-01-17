const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

router.post('/products', controller.create);
router.get('/products', controller.getAll);
router.get('/products/:id', controller.getById);
router.patch('/products/:id', controller.patchById);
router.put('/products/:id', controller.updateById);
router.delete('/products/:id', postsController.updateById);

module.exports = router;

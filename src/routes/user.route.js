const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');

router.route('/')
  /** GET /api/v1/users - Get list of users */
  .get(userCtrl.list)

  /** POST /api/users - Create new user */
  .post(userCtrl.create);

router.route('/:userId')
  /** GET /api/v1/users/:userId - Get user */
  .get(userCtrl.get)

/** Load user when API with userId route parameter is hit */
router.param('userId', userCtrl.load);

module.exports = router;

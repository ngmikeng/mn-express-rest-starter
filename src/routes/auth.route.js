const express = require('express');
const router = express.Router();
const expressJwt = require('express-jwt');
const authCtrl = require('../controllers/auth.controller');
const config = require('../../config/config');

/** POST /api/v1/auth/login
- Returns token if correct username and password is provided */
/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Login
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: request payload
 *        description: Login payload.
 *        schema:
 *          type: object
 *          properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      200:
 *        description: 'OK'
 *      401:
 *        description: 'Unauthorized'
 */       

router.route('/login')
  .post(authCtrl.login);

/** GET /api/v1/auth/random-number
- Protected route, needs token returned by the above as header. Authorization: Bearer {token} */
router.route('/randomNumber')
  .get(expressJwt({ secret: config.jwtSecret }), authCtrl.getRandomNumber);

module.exports = router;

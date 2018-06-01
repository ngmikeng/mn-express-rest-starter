const Joi = require('joi');

module.exports = {
  create: {
    username: {
      in: ['body'],
      isString: true,
      isEmpty: false,
      errorMessage: 'username is wrong'
    },
    fullName: {
      in: ['body'],
      isString: true,
      isEmpty: false
    }
  },
  createUser: {
    body: {
      username: Joi.string().required(),
      fullName: Joi.string().required()
    }
  },
};


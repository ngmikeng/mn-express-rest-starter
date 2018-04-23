
module.exports = {
  responseSuccess: responseSuccess,
  responseError: responseError
};

function responseSuccess(data = [], opts = {}) {
  return {
    data: data,
    success: 1
  };
}

function responseError(error = {}, opts = {}) {
  return {
    status: error.status,
    message: error.message,
    success: 0,
    stack: process.env.NODE_ENV === 'development' ? error.stack : {}
  };
}

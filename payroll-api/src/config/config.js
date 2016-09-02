export default {
  getHostURI: function(env) {
    return "mongodb://localhost:27017/payroll_api-" + env;
  }
};

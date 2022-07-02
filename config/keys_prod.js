/*if( process.env.NODE_ENV === 'production'){
    module.exports = require(__dirname+'/keys_prod');
} else{
    module.exports = require(__dirname+'/keys_dev');
}*/

module.exports = {
  mongoURI: process.env.MONGODB_CONNECTION_URL_PROD,
  mongoConfig: {
    useCreateIndex: true,
    useUnifiedToplogy: true,
    useNewUrlParser: true,
    ssl: true,
    retryWrites: true,
  },
  secretOrKey: "secret",
};

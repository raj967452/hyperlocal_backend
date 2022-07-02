/*if( process.env.NODE_ENV === 'production'){
    module.exports = require(__dirname+'/keys_prod');
} else{
    module.exports = require(__dirname+'/keys_dev');
}*/

module.exports = {
  mongoURI: process.env.MONGODB_CONNECTION_URL,
  mongoConfig: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  secretOrKey: "secret",
};

const { nesbroDB } = require("nesbros");

const ndb = new nesbroDB({

    uri: "mongodb+srv://ngg:CTRj4dXxUdsRRwJ@wax.vfa3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

});

module.exports = ndb;
var Discogs = require('disconnect').Client;

//Set User-Agent
var dis = new Discogs('VinylLibraryReactApp/1.2.1');

//Get release data
var db = new Discogs().database();
db.getRelease(176126, function (err, data) {
  console.log(data);
});

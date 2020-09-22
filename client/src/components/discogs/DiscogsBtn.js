import React from 'react';

const DiscogsBtn = ({ setDiscogsAutofill }) => {
  //Initialize Disconnect
  var Discogs = require('disconnect').Client;

  //Set User-Agent
  //var dis = new Discogs('VinylLibraryReactApp/1.2.1');

  //Get release data from discogs ID number

  const searchDiscogs = () => {};

  const returnData = (releaseID) => {
    var db = new Discogs().database();
    db.getRelease(176126, function (err, data) {
      const filldata = [
        data.title,
        data.artists[0].name,
        data.labels[0].name,
        data.labels[0].catno,
        data.released,
        data.country,
        'coverfront',
        'coverback',
        'coverLp',
      ];
      setDiscogsAutofill(filldata);
    });
  };
  const onClick = () => {
    returnData();
  };

  return <button onClick={onClick}>Discogs</button>;
};

export default DiscogsBtn;

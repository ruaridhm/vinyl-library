import React from 'react';

const DiscogsBtn = ({ setDiscogsAutofill }) => {
  //Initialize Disconnect
  // var Discogs = require('disconnect').Client;

  //Set User-Agent
  //var dis = new Discogs('VinylLibraryReactApp/1.2.1');

  //Get release data from discogs ID number

  // const returnData = (releaseID) => {
  //   var db = new Discogs().database();
  //   db.getRelease(176126, function (err, data) {
  //     const filldata = [
  //       data.title,
  //       data.artists[0].name,
  //       data.labels[0].name,
  //       data.labels[0].catno,
  //       data.released,
  //       data.country,
  //       'coverfront',
  //       'coverback',
  //       'coverLp',
  //     ];
  //     setDiscogsAutofill(filldata);
  //   });
  // };
  const onClick = () => {
    let appkey = 'NDojcxfzXQKCDcJbMYiA';
    let appsecret = 'OVhZRVYcvQiaQSrIlqQqFDqXzENIDEJF';
    let searchParam = 'release_title';
    let searchValue = 'nevermind';
    let searchParam2 = 'artist';
    let searchValue2 = 'nirvana';

    let discogsGetURL = `https://api.discogs.com/database/search?${searchParam}=${searchValue}&${searchParam2}=${searchValue2}&key=${appkey}&secret=${appsecret}`;

    const getData = async () => {
      let response = await fetch(discogsGetURL);
      let json;

      if (response.ok) {
        // if HTTP-status is 200-299
        // get the response body (the method explained below)
        json = await response.json();
        console.log(json);
      } else {
        alert('HTTP-Error: ' + response.status);
      }
    };

    // getData();
  };

  return <button onClick={onClick}>Discogs</button>;
};

export default DiscogsBtn;

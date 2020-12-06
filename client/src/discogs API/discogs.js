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
  } else {
    alert('HTTP-Error: ' + response.status);
  }
  //json actions
};

export default getData;

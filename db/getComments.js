//  Logic derived from tv-browser lab and fitted to function on a new api

const axios = require("axios");
const fs = require("fs");

let baseURL = `https://jsonplaceholder.typicode.com/comments/`;
let commentCount = 10;

let ids = [];

//  Manually adjusted the pokeCount and i values to manually batch the first 153 pokemon.
//  TODO  Make a recursive loop to automate batching.

// Capture the first 10 comments
for (let i = 1; i <= commentCount; i++) {
  ids.push(i);
}

// build 20 urls to make calls to, and return array of promises with those urls
// @ts-ignore
let calls = ids.map(id => `${baseURL}${id}`).map(url => axios.get(url));

// execute all promises, writing to disk if successful
Promise.all(calls)
  .then(success => {
    let collectedData = success.map(res => res.data);
    // console.log(collectedData);
    let stringified = JSON.stringify(collectedData);
    fs.writeFile(__dirname + "/comment10.json", stringified, "utf8", err => {
      if (err) {
        console.error(err);
      } else {
        console.log(
          `successfully wrote ${
            collectedData.length
          } records to db/comment10.json`
        );
      }
    });
  })
  .catch(err => {
    console.error(err);
    console.error(
      "there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above."
    );
  });

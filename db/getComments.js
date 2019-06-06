//  Logic derived from General Assembly tv-browser lab to retrieve a comment data from API

const axios = require("axios");
const fs = require("fs");

let baseURL = `https://jsonplaceholder.typicode.com/comments/`;
let commentCount = 30;

let ids = [];

//What happens when I can't pull all the data into one JSON file? How to automate batching?

// Capture all 500 comments
for (let i = 1; i <= commentCount; i++) {
  ids.push(i);
}

// build 500 urls to make calls to, and return array of promises with those urls
let calls = ids.map(id => `${baseURL}${id}`).map(url => axios.get(url));

// execute all promises, writing to disk if successful
Promise.all(calls)
  .then(success => {
    let collectedData = success.map(res => res.data);
    // console.log(collectedData);
    let stringified = JSON.stringify(collectedData);
    fs.writeFile(__dirname + "/comments.json", stringified, "utf8", err => {
      if (err) {
        console.error(err);
      } else {
        console.log(
          `successfully wrote ${
            collectedData.length
          } records to db/comments.json`
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

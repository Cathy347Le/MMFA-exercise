## Planning steps

- Double check I have node
- install npm `npm init -y`
- install dependencies - express, mongoose, axios
- require express and setup port 3000
- test get request with Hello World
- capture data from https://jsonplaceholder.typicode.com/comments and save it to a JSON file. Try to capture the first 10 comments
- Updated the loop from i = 0 to i = 1 to get it to work

```
for (let i = 1; i <= commentCount; i++) {
  ids.push(i);
}
```

- build comments model
- create comment controller in index.js
- create seed file to load in comments from comment.json file
- Create connection.js to save comment data to mongoDB
- Check comments collections exist in mongoDB
- Check port 3000 to see json data displayed on browser
- Reached MVP
- Capture all 500 comments

#### Resources used

1. GA Express Json Lab: https://git.generalassemb.ly/dc-wdi-node-express/tv-browser-json-api
2. My MEHN project ThinkMovie: https://github.com/Cathy347Le/Think-Movie

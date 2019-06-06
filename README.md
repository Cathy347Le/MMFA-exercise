- Double check you have node
- install npm `npm init -y`
- install dependencies - express, mongoose, axios
- require express and setup port 3000
- test get request with Hello World
- capture data from https://jsonplaceholder.typicode.com/comments and save it to a JSON file
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

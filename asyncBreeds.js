// asyncBreeds.js
const fs = require("fs");
const breedDetailsFromFile = function(breed, callback) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    //Passing the data to callback
    if (!error) {
      return callback(data);
    }
    if (error) {
      return callback(undefined);
    }
  });
};

// we try to get the return value
// breedDetailsFromFile("Bombay", (bombay) => {
//   console.log("Return Value: ", bombay);
// });
breedDetailsFromFile("sapphire", sapphire => {
  console.log("Return Value: ", sapphire);
});

module.exports = breedDetailsFromFile;

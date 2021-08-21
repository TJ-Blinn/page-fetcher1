/*
Implement a small command line node app called fetcher.js which should take a UR
as a command-line argument as well as a local file path and download the resource to the specified path.
* recycle code from requestTinker.js using request library
* use process.argv.slice(2) for cmd line node / set up variable = args
* cmd line node function take URL + local path (data folder) and d/l resources to path

- 2 function: page fetcher, a page writer
*/
const request = require("request"); // external node library
const fs = require("fs"); // external node library | import these external libraries first, before calling

const url = process.argv[2];
const path = process.argv[3];

const pageFetcher = (url, path) => {
  //Use the request library to make the HTTP request---------------------------
  request(url, (error, response, body) => {
    // request is formatted for HTTP protocol, do not change
    if (response) {
      console.log("Got it!");
      pageWriter(path, body);
      //path === pathway provided in cmd to save file | body === body of text from page found
    } else {
      console.log("Please verify URL provided");
    }
  });
};

const pageWriter = (path, data) => {
  fs.writeFile(path, data, (err) => {
    // fs.writeFile is formatted for HTTP protocol, do not change
    if (err) {
      throw err; // acts like a return and exits script
    }
    const byteSize = fs.statSync(path).size;
    //console.log(byteSize);
    console.log(`Downloaded and saved ${byteSize} bytes to ${path}.`);
  });
};

// *********** process.argv for this to run | node fetcher.js.js 5 *****************

pageFetcher(url, path);

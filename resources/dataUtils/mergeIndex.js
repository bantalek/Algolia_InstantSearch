// const algoliasearch = require('algoliasearch');
// const request = require('request');
// const readFileSync = require('fs').readFileSync;
// const path = require('path')

// const args = process.argv;
// const filePath = __dirname + `/${args[2]}`;
// if(path.extname('index.html').includes('csv')) {
//   const csv = require('csvtojson');
  
// }


// const API_KEY = '031ccd7a28912ed74e0b262b92d9aeab';
// const APPLICATION_ID = 'FND5QH0PGJ'

// if (typeof filePath === 'string' && filePath !== undefined) {
//   const body = JSON.parse(readFileSync(filePath, 'utf8'));
//   console.log('body', body)
// }
// var request = require('request');

// var headers = {
//     'X-Algolia-API-Key': `${API_KEY}`,
//     'X-Algolia-Application-Id': `${APPLICATION_ID}`
// };

// var dataString = '@batchFile.json';

// var options = {
//     url: `https://${APPLICATION_ID}.algolia.net/1/indexes/restaurantsCsv/batch`,
//     method: 'POST',
//     headers: headers,
//     body: dataString
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(JSON.parse(body));
//     }
// }

// request(options, callback);
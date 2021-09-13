console.log("Hello World :)");
                                                                                         // variables + variables NODEJS declarées
const fs = require('fs');
const request = require('request')
let jsontest = require('./json_files_eurotunnel/00086714.json');
var headers = {
  'Origin': 'http://fiddle.jshell.net',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'en-US,en;q=0.8',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Accept': '*/*',
  'Referer': 'http://fiddle.jshell.net/_display/',
  'X-Requested-With': 'XMLHttpRequest',
  'Connection': 'keep-alive'
};
var options = {
  url: 'http://localhost:5000/api/v1/ITAccount',
  method: 'POST',
  headers: headers,
  body: jsonOutput
};



                                                                                        // extraction des données et transformation en objet JS
var obj = {
  matricule: jsontest.PERNR,
  numInfo: jsontest.ObjectSID,
  etat: jsontest.Current_Step.Name
};
console.log(obj);

// var testParse = JSON.parse(array);
// console.log(testParse);

                                                                                        // création d'un format JSON à partir de l'objet JS
var jsonOutput = JSON.stringify(obj);
console.log(jsonOutput);
 
                                                                                        // Création du fichier JSON
fs.writeFile('output00086714.json', jsonOutput, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});

                                                                                      // Envoi du JSON sur l'API


function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
      console.log(body);
  }

}

request(options, callback);

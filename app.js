console.log("Hello World :)");
                                                                                         // variables + variables NODEJS declarées
const fs = require('fs');
var request = require('request')
let jsontest = require('./json_files_eurotunnel/00086714.json');
var headers = {
  'accept': '*/*',
  'Content-Type': 'text/json'
};

                                                                                        // extraction des données et transformation en objet JS
var obj = {
  matricule: jsontest.PERNR,
  itAccountID: jsontest.ObjectSID,
  currentStep: jsontest.Current_Step.Name
};
console.log(obj);

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

                                                                                      // Envoi du JSON sur l'API >>> ne fonctionne pas encore
// fetch('http://localhost:5000/api/v1/ITAccount', {
//     method: 'POST',
//     headers: {
//         'accept': '*/*',
//         'Content-Type': 'application/*+json'
//     },
//     body: JSON.stringify(obj)
// });
var options = {
  url: 'http://localhost:5000/api/v1/ITAccount',
  method: 'POST',
  headers: headers,
  body: jsonOutput
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
      console.log(body);
  }else{
    console.log("error");
  }
}

request(options, callback);




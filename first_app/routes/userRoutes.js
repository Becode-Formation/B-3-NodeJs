const jsonfile = require("jsonfile");
const file_path = "./DB/users.json";

module.exports = app => { // Permet d'envoyer le module vers l'index.js

// Lire le fichiers JSON
  app.get("/users", (req, res) => { // "/users" est la route à utiliser pour la requête GET 

    jsonfile.readFile(file_path, function(err, content) {
          res.send(content);
     });
  })

  //Ajouter un nouvel utilisateur
  app.post("/users/new", (req, res) => {
      let { email, username } = req.body
      
        //D'abord on ouvre le fichier en lisant
        jsonfile.readFile(file_path, (err, content) => {
              //on ajoute les nouvel infos
              content.push({email: email, username: username})

              console.log("Ajouts de " + username + " dans la DB")

              //On écrit les infos dans le fichier
              jsonfile.writeFile(file_path, content, (err) => {
                    console.log(err)
              })
        })

        //Tout est ok, on confirme en envoyant le status success
        res.sendStatus(200)
  })
};
const { json } = require("body-parser");
const jsonfile = require("jsonfile");
const file_path = "./DB/users.json";

module.exports = app => { // Permet d'envoyer le module vers l'index.js

      // Show all users
      app.get("/users", (req, res) => {
            console.log("fetching all users");
      
            jsonfile.readFile(file_path, function(err, content) {
            res.send(content);
            });
      });

      //Return an user
      app.get("/user", (req, res) => {
            let user
            let email = req.query.email

            jsonfile.readFile(file_path, (err, content) => {
                  for(let i = 0; i < content.length; i++){
                        if(content[i].email === email){
                              console.log("Found user " + content[i].username)
                              user = content[i]
                        }
                  }
                  res.send(user)
            })
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

      //Deleting 

      app.delete("/users/destroy", (req, res) => {
            let email = req.body.email

            //read the ffile
            jsonfile.readFile(file_path, (err, content) => {

                  for(let i = 0; i < content.length; i ++){
                        if(content[i].email === email){
                              console.log(content[i].email, email )
                              console.log("removing " + content[i].email + " from DB")
                              content.splice(i, 1)
                        }
                  }

                  jsonfile.writeFile(file_path, content, (err) => {
                        console.log(err)
                  })
            })

            res.sendStatus(200)
      })

      //Updating 

      app.put("/users", (req, res) => {
            let user
            let username = req.body.username
            let email = req.query.email // C'est l'email qu'on va devoir check

            jsonfile.readFile(file_path, (err, content) => {
                  for(let i = 0; i < content.length; i++){
                        if(content[i].email === email){
                              console.log("Updated user " + email + " has now username : " + username )

                              user = content[i]
                              user.username = username
                        }
                  }

                  jsonfile.writeFile(file_path, content, err => {
                        console.log(err)
                  })
            })

            res.sendStatus(200)
      })


};
const http= require('http'); // On require le serveur
const fs = require('fs') // Accède et interagit avec les fichiers systeme
const url = require('url') // Permet d'accéder au info de l'url 

const port = 3000

// On créer une requête au serveur en vérifier le status
// Et on envoie un resultat si le status est de 200 (success)
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	fs.readFile('./views/index.html', 'utf-8', (err, data) => {
		if (err) throw err
		let query = url.parse(req.url, true).query  // On fait une requête vers l'url
		res.setHeader('Content-Type', 'text/html; charset=utf_8');
		data = data.replace("{{ name }}", query.name) // On modifie la valeur data recue /!\ au espace avec index.html
		res.end(data)
	})
});


// On appel la méthod listen pour écouter si quelque choses se passe
// Et on met en paramètre une fonction qui sera appelée chaque fois que 
// la méthode est utilisée. (CallBack function)
server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});

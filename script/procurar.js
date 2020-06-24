
// Button de busca 

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
	
	// Input de busca do nome do usuario
	let nome = document.querySelector(".form-busca__nome").value;
	
	// Endpoint api
	let url = `https://api.github.com/users/${nome}`;

	// Requisição da api
	let request = new XMLHttpRequest();

	request.open("GET",url);

	request.onload = function () {
		
		// Usuario
		let usuario = JSON.parse(request.responseText);

		// Foto do usuario
		let photo_user = document.getElementById("photo_user");
		photo_user.src = usuario.avatar_url;

		// Nome do usuario
		let user = document.querySelector("#user");
		user.innerHTML = usuario.login;

		// Bio do usuario
		let bio = document.querySelector("#bio");
		bio.innerHTML = usuario.bio;

		// Company do usuario
		let company = document.querySelector("#company");
		company.innerHTML = usuario.company;

		//Localização do usuario
		let location = document.querySelector("#location");
		location.innerHTML = usuario.location;

		// Blog do usuario
		let linkElement = document.createElement("a");
		linkElement.setAttribute("href",usuario.blog);

		let linkText = document.createTextNode(usuario.blog);
		linkElement.appendChild(linkText);

		let blog = document.querySelector("#blog");
		blog.appendChild(linkElement);	

		// Seguidores do usuario
		let seguidores = document.querySelector("#seguidores");
		seguidores.innerHTML = "Seguidores: " + usuario.followers;

		// Seguindo do usuario
		let seguindo = document.querySelector("#seguindo");
		seguindo.innerHTML = "Seguindo: " + usuario.following;
	}


	blog.innerHTML = "";
	request.send();

});
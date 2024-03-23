(function () {

    const userData = document.querySelector("#user-data")

    async function getUsers() {
        try {
            const response = await fetch("https://randomuser.me/api/?results=10");
            const data = await response.json();

            // Limpiar el contenido anterior antes de agregar nuevos usuarios
            userData.innerHTML = '';

            // Iterar sobre los usuarios y mostrarlos en el HTML
            data.results.forEach(userApi => {
                const CreateuserElement = document.createElement('p');
                CreateuserElement.innerHTML = `
                <img src="${userApi.picture.large}" alt="Foto de perfil"> <br>
                    <strong>Nombre:</strong> ${userApi.name.first} ${userApi.name.last} <br>
                    <strong>Email:</strong> ${userApi.email} <br>
                    <strong>Celular:</strong> ${userApi.cell} <br>
                    <strong>Pais:</strong> ${userApi.location.country} 
                    <strong>Ciudad:</strong> ${userApi.location.city} 
                    <hr>
                `;
                userData.appendChild(CreateuserElement);
            });
        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
        }
    }

    // Llamar a la función getUsers al cargar la página
    getUsers();
})();


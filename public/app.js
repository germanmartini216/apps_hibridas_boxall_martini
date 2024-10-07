document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
  
    // Crear y mostrar la card con la información del libro
    const createCard = (libro) => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const cardHeader = document.createElement('div');
      cardHeader.className = 'card-header';
      const title = document.createElement('h3');
      title.textContent = libro.nombre;
  
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';
      const author = document.createElement('p');
      author.innerHTML = `<strong>Autor:</strong> ${libro.autor}`;
      const year = document.createElement('p');
      year.innerHTML = `<strong>Año:</strong> ${libro.anio}`;
  
      const cardFooter = document.createElement('div');
      cardFooter.className = 'card-footer';
      const button = document.createElement('button');
      button.textContent = 'Actualizar';
      button.addEventListener('click', () => fetchLibro()); // Modificado
  
      cardHeader.appendChild(title);
      cardBody.appendChild(author);
      cardBody.appendChild(year);
      cardFooter.appendChild(button);
  
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);
  
      app.innerHTML = ''; // Limpiar el contenido anterior
      app.appendChild(card); // Insertar la nueva card
    };
  
    // Función para obtener un libro aleatorio desde la API
    const fetchLibro = async () => {
      try {
        // Obtener todos los libros primero
        const response = await fetch('/libros');
        const libros = await response.json();
  
        // Seleccionar un libro aleatorio
        const randomIndex = Math.floor(Math.random() * libros.length);
        const id = libros[randomIndex].id;
  
        // Hacer la petición para obtener el libro por ID
        const libroResponse = await fetch(`/libros/${id}`);
        const libro = await libroResponse.json();
        createCard(libro); // Crear la card con los datos del libro
      } catch (error) {
        console.error('Error fetching libro:', error);
      }
    };
  
    // Cargar un libro aleatorio cuando se carga la página
    fetchLibro();
  });
  


# El Mejorado Buscador de Rick y Morty

Échale un ojo a mi APP en https://eliaar.github.io/Full-API-Rick-and-Morty-React-implementation/

El proyecto consiste en el desarrollo de una aplicación de búsqueda sobre la serie Rick y Morty a través de la la API https://rickandmortyapi.com/ e implementada en JavaScript/React.

## Funcionalidades

### Búsquedas

- Por personaje: se podrá filtrar por nombre, especie y estado
- Por localización: por tipo y dimensión
- Por episodio: por nombre y número

### Paginación

Se ha creado un componente reusable para las distintas páginas de búsqueda que permite al usuario navegar facilmente por los resultados

### Obtención de datos

Esto se realiza mediante funciones fetch que recogerán datos de distintos Endpoints:

- Llamadas a la API para filtrado de las distintas búsquedas usando la interfaz URLSearchParams para facilitar la adición de nuevos parámetros a las llamadas
- Llamadas a la API para conseguir información individualizada de un personaje, localización o episodio en base a un id proporcionado en la URL
- Llamadas a la API para obtener datos relacionados: dado la estructura de datos provista por la API, es necesario hacer sucesivas llamadas para recoger la información relaccionada de cada personaje, localización o episodio en las páginas de detalle

### Sistema de rutas

- Se realiza a través de la librería React Router
- Estructuración:
  - Homepage: contiene enlaces para acceder a las tres páginas de búsqueda
  - Páginas de búsqueda: una por cada tipo de búsqueda. En cada una de ellas aparece un listado (que podrá ser completo o filtrado) y la paginación (que variará según los resultados del filtrado)
  - Páginas de detalle: se muestran más detalles que en el listado de la página de búsqueda; así como información y enlaces a otras páginas de detalle relacionadas
  - Componente de error: se introduce un componente para gestionar las rutas inexistentes

### Mejora en experiancia de usuario (UX)

- Al entrar en una página de detalle y, a continuación pulsar atrás, el campo de texto contendrá el texto que tenía anteriormente
- Links para poder navegar cómodamente por toda la app
- Mostrar detalles del personaje mediante iconos, en concreto la especie y el estatus
- Se ha usado un sistema de LocalStorage para mantener los campos de filtrado
- Mensaje de loading, cuando se accede a la páginas de detalle, si el navegador tarda en cargar

### Manejo de errores

- Cuando se busque por un personaje, localización o episodio y no haya ninguno que coincida con dicho texto
- Cuando se navegue a una URL de personaje inexistente

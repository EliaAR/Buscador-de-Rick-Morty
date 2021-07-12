El proyecto consiste en el desarrollo de una apliación de búsqueda sobre la serie Rick y Morty a través de la la API https://rickandmortyapi.com/ e implementada en JavaScript/React.

Funcionalidades:

- Obtención listado:
  - Ésto se hará a través de la función fetch que recogerá datos del Endpoint de la API (https://rickandmortyapi.com/api/character)
  - Esta solicitud se realiza
- Filtrado de los personajes:
  - Por nombre:
    - Para que la usuaria pueda realizar la búsqueda/filtrado, se ha introducido un campo de texto donde podrá introducir el nombre
    - A medida que vaya escribiendo, irá realizando nuevas llamadas a la API
  - Por especie y por estado: :
    - Se realiza a través de los datos de la primera llamada a la API
    - En esta ocasión se usan etiquetas tipo select
- Sistema de rutas
  - Se realiza a través de la librería React Router
  - Estructuración:
    - Página principal: aparecerá un listado de personajes de Rick y Morty. Éste podrá ser completo o filtrado (en caso de realizada alguna búsqueda)
    - Páginas secundarias, mostrarán los detalles de un personaje concreto al hacer click en alguno de los que aparezcan en el listado
    - Componente de error: se introduce un componente como ruta de error si se produce algún fallo tanto en la ruta de la págiuna principal como secundaria
- Otros:
  - Aparición de mensajes de aviso cuando:
    - Se busque por un personaje y no haya ninguno que coincida con dicho texto
      - Esto se consigue al introducir un nuevo estado que se setea con el cath de la llamada a la API
    - Se navegue a una URL de personaje inexistente como por ejemplo http://localhost:3000/#/detail/12345
  - Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto se muestra el texto que tenía anteriormente
  - Mostrar detalles del personaje mediante iconos, en concreto la especie y el estatus
  - El listado de personajes aparece ordenado alfabéticamente por nombre
  - Se ha usado un sistema de LocalStorage para mantener los campos de filtrado

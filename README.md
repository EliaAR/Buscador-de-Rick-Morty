El proyecto consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar. Vamos a usar React para realizarlo.

Especificidades:
- La aplicación tendrá una página principal donde aparecerá un lisado de personajes de la serie Rick y Morty
- Dicho listado se obtendrá a través de la función fetch que recogerá datos del Endpoint de la API de rickandmortyapi
- Una vez se tengas los datos, se pintarán en la página principal. En dicho proceso se pedirán sólo una serie de datos concretos de la base de datos de la API. Esta solicitud se realiza sólo de los primeros 20 personajes de la base de datos, correspondientes a la primera página de dicha base
- Por otro lado se ha incluido la posibilidad de filtrar los personajes por nombre y especie:
. Por nombre: esto se hace a través de una nueva llamada a la API. En esta ocasión se utiliza el Endpoint proporcionado por la misma para tal efecto (https://rickandmortyapi.com/api/character/?name=). En esta ocasión, la búsqueda/filtrado se hará sobre la totalidad de la base de datos
Para que el usuario pueda realizar la búsqueda/filtrado se ha introducido un campo de texto donde podrá introducir el nombre y, a medida que vaya escribiendo, el listado de la página principal irá ajustándose al filtrado.
. Por especie: se ha introducido este filtrado extra que se realiza a través de los datos de la primera llamada a la API. 
Para que el usuario pueda realizar la búsqueda/filtrado se ha introducido una etiqueta tipo select donde se podrá escoger la especie y, una vez escogida, el listado de la página principal se ajustará al filtrado.
Dado la introducción de la segunda llamada a la API, si se busca primero por nombre y después de quiere filtrar por especie, la posibilidad de filtrado aumentará, ya que se introducirán todas las especies correspondientes a los datos obtenidos en la búsqueda por nombre. 
Así, si se hace primero una búsqueda/filtrado por especies, sólo aparecerán 3 opciones (“todas las especies”, “human” y “alien”). Esto se debe a lo ya explicado, como la primera llamada sólo se hace de la primera página, las especies correspondientes son sólo “human” y “alien”. Por lo que serán las que aparezcan en el select (más la introducida de “todas las especies”. Sin embargo, si se busca/filtra primero por el nombre, buscando, por ejemplo, Rick, las opciones aumentarán a “Humanoid”, “Unknow”; ya que ahora la búsqueda no será sólo de los 20 primeros personajes, si no de toda la base de datos
- Se ha creado un sistema de rutas a través de la librería React Router. De modo que la estructuración es la siguiente:
. Página principal: listado de personajes más las opciones de filtrado
. Página secundaria: a la misma se accede pulsando en la tarjeta de cada personaje en la página principal y también se introduce una etiqueta Link para poder volver a la página principal
. Componente de error: se introduce un componente como ruta de eror si no da error tanto la ruta de la págiuna principal, como secundaria
- Otros:
. Se ha utilizado la etiqueta form para envolver a los inputs
. Se ha usado el método PreventDefault() para evitar  que si pulsamos intro el navegador navegue o cambie la ruta sin querer
. Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se muestra un mensaje de aviso. Esto se consigue al introducir un nuevo estado que se setea con el cath de la llamada a la API
. El filtro de búsqueda por nombre filtra independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas. Esto sucede porque los datos se cogen con la segunda llamada a la APi y la misma ya elimina esta distinción
. Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto se muestra el texto que tenía anteriormente porque se ha realizado un lifting del estado
. Mostrar la especie y si un personajes está muerto con un icono
. Maquetación: uso de grid y maquetación responsive
. El listado de personajes aparece ordenado alfabéticamente por nombre
. La URL del detalle de personaje es compartible al usar HashRouter como método de routing
. Si refescamos el navegador en el detalle de un personaje debe volver a mostrar el detalle del personaje justamente por lo anterior
. En el caso de que el usuario navegue a una URL inexistente como por ejemplo http://localhost:3000/#/detail/12345 (el id 12345 no existe) se muesta un mensaje de aviso
. Se ha usado un sistema de LocalStorage para mantener los campos de filtrado

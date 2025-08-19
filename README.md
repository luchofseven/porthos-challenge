## Porthos - Challenge - Landing Page de Citas

#### Despliegue

- Se puede visualizar la app en el siguiente enlace: [https://genuine-palmier-7152d3.netlify.app/](https://genuine-palmier-7152d3.netlify.app/) o levantar el proyecto localmente, más abajo explicado.

> [!IMPORTANT]
> En la **API** proporcionada: [https://zenquotes.io/](https://zenquotes.io/), no tuve posibilidad de utilizarla, ya que restringe las peticiones por bloqueos de **CORS**, además, los endpoints requeridos para lograr los requerimientos del challenge, actualmente son de pagos, por lo cual indagué un poco y me encontré con una API gratuita de similar funcionalidad y recursos.

#### API - DUmmyJSON

- [dummyjson.com - quotes](https://dummyjson.com/docs/quotes)
- [dummyjson.com - posts](https://dummyjson.com/docs/posts)

Si bien esta API no es exactamente igual a la proporcionada, cumple los requisitos mínimos.  
La sección de citas (quotes) no cuenta con un endpoint para recuperar tales por palabra clave (keyword) por lo que decidí utilizar la de publicaciones (posts) que sí cuenta con tal función y al menos poder realizar algo similar a lo requerido en el challenge.

#### ¿Cómo ejecutar la aplicación localmente?

1. Clonamos el repositorio en alguna carpeta a elección con `git clone https://github.com/luchofseven/porthos-challenge.git`
2. Una vez dentro del proyecto, procedemos a instalar las dependencias con `npm install`.
3. Luego ejecutamos `npm run dev` y deberíamos poder visualizar por defecto el proyecto en la siguiente dirección: `http://localhost:5173/`.

#### Funcionalidades

- Por defecto en el inicio se muestran 30 citas aleatorias.
- Se muestra un selector de posibles palabras claves disponibles (al cambiar de API solo funciona con algunas citas).
- Al hacer click en el botón **more with $keyword** de las citas que lo posean, se guarda la palabra clave en una cookie llamada **lastSelectedKeyword** (la cookie expira en 1 hora).
- Al cargar la página, si la cookie existe, la primer cita mostrada pertenece a esa palabra clave. Las demás están en un órden aleatorio.
- Si no existe la cookie, se muestran citas aleatorias.
- Al entrar en **/qod** se muestra una cita random la cual puede ser descargada en formato .txt.
- Al entrar a **/posts** se puede buscar publicaciones por alguna palabra clave por ej: (love, life, work, etc).

#### Extras

- Se agregó un pequeño **debounce** para retardar un breve periodo de tiempo la petición a la API cuando el usuario esta tipeando la palabra clave en **/posts**.
- Se implementó un diccionario para que cuando el usuario vuelva a tipear una palabra clave que ya había sido buscada no se haga la petición y se devuelvan las publicaciones que ya se habían obtenido anteriormente.

#### Tecnologías y dependencias utilizadas

- React con TypeScript (inicializado con [Vite](https://vite.dev/)).
- [React Router](https://reactrouter.com/) para el manejo de rutas y lograr una experiencia SPA.
- CSS para todos los estilos.

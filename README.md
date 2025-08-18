## Porthos - Challenge - Landing Page de Citas

> [!IMPORTANT]
> En la **API** proporcionada: [https://zenquotes.io/](https://zenquotes.io/), no tuve posibilidad de utilizarla, ya que restringe las peticiones por bloqueos de **CORS**, además, los endpoints requeridos para lograr los requerimientos del challenge, actualmente son de pagos, por lo cual indagué un poco y me encontré con una API gratuita de similar funcionalidad y recursos.

#### API - DUmmyJSON

- [https://dummyjson.com/](https://dummyjson.com/docs/quotes)

Si bien esta API no es exactamente igual a la proporcionada, cumple los requisitos mínimos, excepto la búsqueda por keyword, es decir, no es posible recuperar citas por palabras claves ya que no cuenta con un endpoint que lo facilite.

#### ¿Cómo ejecutar la aplicación localmente?

1. Clonamos el repositorio en alguna carpeta a elección con `git clone https://github.com/luchofseven/porthos-challenge.git`
2. Una vez dentro del proyecto, procedemos a instalar las dependencias con `npm install`.
3. Luego ejecutamos `npm run dev` y deberíamos poder visualizar por defecto el proyecto en la siguiente dirección: `http://localhost:5173/`.

#### Tecnologías y dependencias utilizadas

- React con TypeScript (inicializado con [Vite](https://vite.dev/)).
- [React Router](https://reactrouter.com/) para el manejo de rutas y lograr una experiencia SPA.
- CSS para todos los estilos.

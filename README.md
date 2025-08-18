## Challenge - Porthos

#### Landing Page de Citas

> [!IMPORTANT]
> En la **API** proporcionada: [https://zenquotes.io/](https://zenquotes.io/), no tuve posibilidad de utilizarla ya que restringe las peticiones por bloqueos de **CORS**, además de los endpoints requeridos para lograr los requerimientos del challenge actualmente son de pagos. Por lo cual indagué un poco y me encontré con una API gratuita de similar funcionalidad y recursos.

#### API - DUmmyJSON

- [https://dummyjson.com/](https://dummyjson.com/docs/quotes)

Si bien esta API no es exactamente igual a la proporcionada, cumple los requisitos mínimos, excepto la búsqueda por keyword, es decir, no es posible recuperar citas por palabras claves ya que no cuenta con un endpoint que lo facilite.

#### ¿Cómo ejecutar el proyecto localmente?

1. Repositorio de GitHub donde esta alojado el proyecto: [luchofseven/porthos-challenge](https://github.com/luchofseven/porthos-challenge).
2. Clonamos el repositorio en alguna carpeta a elección con `git clone https://github.com/luchofseven/porthos-challenge.git`
3. Una vez dentro del proyecto, procedemos a instalar las dependencias con `npm install` o algun otro manejador de paquetes como bun, por ej: `bun install`.
4. Luego ejecutamos `npm run dev` y deberíamos poder visualizar por defecto el proyecto en la siguiente dirección: `http://localhost:5173/`.

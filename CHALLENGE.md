## **Challenge - Porthos**

#### **Landing Page de Citas con ZenQuotes API**

###### API

- [https://zenquotes.io/](https://zenquotes.io/)
- [https://docs.zenquotes.io/zenquotes-documentation/](https://docs.zenquotes.io/zenquotes-documentation/)

###### REQUISITOS

- ###### Diseño tipo "bricks" (bloques) donde cada bloque contenga:

  - Una cita relacionada con una palabra clave específica.
  - La palabra clave asociada.
  - Un botón o link titulado "more" o "more with $keyword" (según si se tiene o no espacio dependiendo del viewport) debajo de la cita, si es posible en el borde del brick.
  - Al entrar en /qod se debe devolver una cita random (qod = quote of the day) con su autor en formato txt.

- ###### Funcionalidad del Botón "More":

  - Al hacer clic en el botón "more" de una cita, la aplicación debe realizar una llamada a la API para obtener 50 citas aleatorias relacionadas con la misma palabra clave y mostrar solo 10 citas.
  - Las citas adicionales deben mostrarse en un modal o en una nueva sección en la página, permitiendo al usuario verlas sin salir de la landing page.

- ###### Manejo de Cookies:

  - Al hacer clic en una cita (en el botón "more"), se debe guardar la palabra clave de la cita en una cookie llamada lastSelectedKeyword.
  - Al cargar la página, si la cookie lastSelectedKeyword existe, la primera cita mostrada debe pertenecer a esta palabra clave. Las demás citas deben ser de diferentes palabras clave en un orden aleatorio.
  - Si no existe la cookie, la landing debe mostrar citas de diferentes palabras clave en un orden aleatorio.

- ###### Uso de la API:

  - Utilizar la API de ZenQuotes para obtener citas iniciales y las citas aleatorias filtradas por palabras clave.
  - Asegurarse de manejar adecuadamente los errores en caso de que la API no responda o devuelva un error.

- ###### Estilo y Responsividad:

  - La landing page debe ser responsive, adaptándose bien a diferentes tamaños de pantalla (móvil, tablet y escritorio).
  - Utilizar estilos CSS que sean atractivos y hagan que la experiencia de usuario sea agradable.

- ###### Tecnologías:
  - Utilizar React para el desarrollo de la interfaz de usuario.
  - Utilizar CSS o un framework como Bootstrap para el diseño responsivo.
  - Hacer uso de hooks de React para manejar el estado y los efectos secundarios.

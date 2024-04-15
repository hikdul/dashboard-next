
# Dashboard

simplemente es un pequena prueba sobre como crear un dashboard con next 14.


este proyecto es parte del curso de Fernando Herrera; el codigo original se puede conseguir [aqui](https://github.com/Klerith/next-my-dashboard/tree/fin-seccion-4)

## Notas o elementos a tomar en cuenta 

### diferencio entre localStorage, SesionStorage y cockies

* <b>LocalStorage:</b> es aplica a mantener la informacion por dominio de manera persistente, asi mientras se desee esta informacion se mantiene en el explorador almacenado de manera persistente.
* <b>SessionStorage:</b> esto mantiene la informacion por dominio mientras el explorador se encuentre abierto, depende casi esclusivamente de que el explorador se encuentre abierto, pero una ves se cierre o reinicie el explorador esta informacion se pierde.
* <b>Cookies:</b> estas mantiene la informacion de manera persistente con la diferencia de que estas informacion viaja(mayormente) en las peticiones http y por tanto esta informacion no es esclusiva del navegador si no que al contrario siempre puede estar viajando en cada peticion que se genere en la navegacion. 

## Ramas

### base

en esta rama creamos un contador separando todos los elementos y creando un componente que explicitamente trabaja del lado del cliente como es react normal con su useState. y ademas se cubrieron las siguientes actividades

* Tailwind classes
* Estructura de un dashboard
* useState
* use-client
* Next Link
* Next Image
* Estructura de proyecto
* Permitir imágenes externas

### SSR 

se cubriran las siguiente actividades

* Manejo de Metadata dinámica
* Páginas generadas del lado del servidor - SGR
* Páginas de errores
* Validación de argumentos
* Redirecciones
* Prioridad de Carga de imágenes
* Tipos de revalidación con Fetch y sin Fetch
* Estructuras HTML con Tailwind

### staticGeneration

basicamente en este punto se genera el codigo necesario para que cuando se genere codigo que sea dinamico en una web, se pueda hacer que esta informacion se genere de marena statica y de antemano en el servidor; esto con el unico fin de hacer que la respuestas obtenidas por los usuarios se tengan de antemano y por tanto se pueda hacer en el menor tiempo posible.


### GlobalStateFavoritos
Esta sección tiene por objetivo principal dos cosas:

* Manejo de Favoritos
* Trabajar LocalStorage con Server components

Esto llevará indiscutiblemente a inconvenientes, pero de antemano les digo, cuando trabajemos las aplicaciones reales con bases de datos y Cookies, no es necesario tanta complejidad que se debe de colocar para trabajar y construir aplicaciones que usen el local storage en Next y ese localstorage modifique lo que se genera en pantalla.

### APIHandlers

Esta sección tiene por objetivo principal, crear un RESTful Api básico en Next, nos dará la base para seguir trabajando mediante una "application programming interface", en futuras secciones.


<b>Puntualmente veremos:</b>

* READ
* Paginaciones
* Update
* Post
* SEED
* Docker
* Postgres
* Prisma
* Prisma + Next
* Yup - Validador

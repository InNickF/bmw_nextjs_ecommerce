

# [BMW](https://bmwshop.com.co)

## Instalación

Instalación

```
$ npm install
```

## Entorno de desarrollo

Empezaremos correr el comando, para inciar el servidor

```
$ npm run start:dev
```

Acceder a http://localhost:3000 o el puerto configurado en tus variables de entorno.

**Nota:** Al actualizar cualquier archivo automaticamente actualiza el navegador.

## Lanzamiento a staging o producción

Para BMW se usan 2 entornos, uno es para testiar todos los cambios. Cuando ya todo esta probado, se sube a la rama staging y automaticamente empieza el proceso de despliegue y la rama master es la que se encuentra en producción

Staging
```
$ git push origin staging
```
Producción
```
$ git push origin master
```
#### Ramas (Git)

- **master** - Producción.
- **Staging** - Pruebas.
 


#### Dominio de BMW 

- https://bmwshop.com.co - Producción.
- http://staging.bmwshop.com.co - Pruebas.

## Archivos de configuración

#### .env

En este archivo se agregan constantes globales y accesibles.

| Constante                 | Tipo     | Descripción
| ------------------------ | --------  | ---------------------------------------------------------------------------------------
| **API_URL**	 	       | `String`  | Path base para la petición de algún servicio del servidor.
| **PORT**	 	           | `Number`  | Puerto en el cual corre el servicio que sirve la aplicación.
| **APP_NAME**	 	       | `String`  | Nombre de la aplicación siempre sera bmw.
| **BRAND_ID**	 	       | `Number`  | Id que identifica el Ecommerce bmw siempre sera 3
| **PRODUCTION**	 	   | `Boolean` | True para producción y false para desarrollo se usa para mostrar logs del estado de redux
| **NODE_ENV**	 	       | `String`  | Entorno en el cual esta ejecutando el server development o production
| **FIREBASE_apiKey_bmw**  | `String`  | Llave de acceso de firebase
| **FIREBASE_databaseURL_bmw**  | `String`  | Llave de acceso de firebase
| **FIREBASE_projectId_bmw**  | `String`  | Llave de acceso de firebase
| **FIREBASE_storageBucket_bmw**  | `String`  | Llave de acceso de firebase

## Instalación de librerías

Para la instalación de librerías usar **NPM** en lo posible.

```
$ NPM install [dependencia] --save
```


## Arquitectura de folders

```javascript
build/ /*Aquí esta todo el código*/
	common/ /*Código fuente de componentes y contenedores*/
		src/ /*Fuentes*/
	    	Components/ /*Componentes pequeños reutilizables Searh, Select, sideNav etc*/
	    	Containers/ /*Contenedores o envoltorios que se encargan de tareas especficas Header, Formulario etc*/
	    	Helper/ /*Funciones utiles*/
	    	Redux/ /*Flux de redux esta ubicado en esta carpeta*/
		    Themes/ /*Temas de la aplicación*/
	components/ /*Componentes globales de envoltorio*/
	containers/ /*Contenedores globales de envoltorio*/
	pages/ /*Paginas*/
	Public/ /*Archivos públicos, fuentes,  manifesft. sitemap etc*/
	styles/ /*Estilos generales de toda la aplicación*/
	env/ /*Constantes globales*/

```

**Nota:** Las carpetas o archivos que no aparecen, no hace falta especificarlos.

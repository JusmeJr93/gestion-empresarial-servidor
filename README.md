# Gestión Empresarial - Backend

Este es el backend del sistema de gestión de empresas. Proporciona una API que permite a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre las empresas registradas en la base de datos. Es desarrollado con **Node.js**, **Express**, **MySQL** y está publicada en **Heroku**.

Para el frontend, da clic [aquí](https://github.com/JusmeJr93/gestion-empresarial-servidor)

## Tecnologías Usadas

- **Node.js**: Entorno de ejecución para el servidor backend.
- **Express.js**: Framework para Node.js que simplifica la creación de servidores y el manejo de rutas.
- **MySQL**: Base de datos relacional utilizada para almacenar los datos.
- **mysql2**: Cliente MySQL para Node.js con soporte para Promesas.
- **dotenv**: Carga las variables de entorno desde un archivo `.env` para configuración segura.
- **JAWSDB**: Base de datos MySQL en la nube usada en Heroku.
- **Heroku**: Plataforma utilizada para el despliegue del backend.
- **Express Validator**: Middleware(interceptor) para validar los campos recibidos del frontend.

## Características

- **Crear empresa**: Agregar una nueva empresa con los detalles como nombre, fecha de constitución, tipo de empresa, comentarios y definir si es favorita.
- **Consultar empresas**: Obtener una lista de todas las empresas almacenadas, ordenadas alfabéticamente por nombre.
- **Consultar una empresa**: Obtener los detalles de una empresa específica mediante su ID.
- **Editar empresa**: Actualizar la información de una empresa existente.
- **Eliminar empresa**: Eliminar una empresa de la base de datos.

## Estructura del Proyecto

- **index.js**: Archivo principal donde se configuran las rutas y se inicializa el servidor Express.
- **controllers.js**: Controladores que gestionan la lógica para las operaciones CRUD.
- **db.js**: Configuración de la conexión a la base de datos MySQL, incluyendo soporte para JAWSDB en Heroku.
- **middleware.js**: Intercepta las peticiones del frontend y valida los campos según sea necesario.

## Uso de IA

- **Sugerencia del uso de express-validator**: Utilicé herramientas de Inteligencia Artificial para optimizar la validación de los campos del formulario. Inicialmente implementé validaciones a nivel de base de datos según los requisitos (longitud, formato de fecha, campos obligatorios y opcionales, etc.), pero los campos con formatos incorrectos o vacíos no eran gestionados adecuadamente durante las pruebas. Al investigar soluciones, se sugirió el uso de express-validator y la estructura para interceptar y validar los datos en el servidor antes de que lleguen a la base de datos.

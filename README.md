# Gestión Empresarial - Backend

Aplicación web para la gestión de empresas, que permite **crear**, **consultar**, **editar** y **eliminar** empresas desde una interfaz API REST. Este proyecto está construido con **Node.js**, **Express**, y **MySQL**.

## Descripción del Proyecto

Este backend forma parte de un sistema de gestión empresarial. Proporciona una API que permite a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre las empresas registradas en la base de datos. La aplicación soporta conexiones locales a MySQL y está publicada en **Heroku** utilizando **JAWSDB** para la base de datos MySQL.

## Tecnologías Usadas

- **Node.js**: Entorno de ejecución para el servidor backend.
- **Express.js**: Framework para Node.js que simplifica la creación de servidores y el manejo de rutas.
- **MySQL**: Base de datos relacional utilizada para almacenar los datos.
- **mysql2**: Cliente MySQL para Node.js con soporte para Promesas.
- **dotenv**: Carga las variables de entorno desde un archivo `.env` para configuración segura.
- **JAWSDB**: Base de datos MySQL en la nube usada en Heroku.
- **Heroku**: Plataforma utilizada para el despliegue del backend.

## Características

- **Crear empresa**: Agregar una nueva empresa con los detalles como nombre, fecha de constitución, tipo de empresa, comentarios y si es favorita.
- **Consultar empresas**: Obtener una lista de todas las empresas almacenadas, ordenadas alfabéticamente por nombre.
- **Consultar una empresa**: Obtener los detalles de una empresa específica mediante su ID.
- **Editar empresa**: Actualizar la información de una empresa existente.
- **Eliminar empresa**: Eliminar una empresa de la base de datos.

## Estructura del Proyecto

- **index.js**: Archivo principal donde se configuran las rutas y se inicializa el servidor Express.
- **controllers.js**: Controladores que gestionan la lógica para las operaciones CRUD.
- **db.js**: Configuración de la conexión a la base de datos MySQL, incluyendo soporte para JAWSDB en Heroku.

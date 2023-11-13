## API Node.js Express - Documentación

Esta documentación proporciona una descripción de los endpoints disponibles en la API Node.js Express para gestionar productos y carritos. La API escucha en el puerto 8080 y expone dos grupos de rutas: `/products` y `/carts`.

### Productos

Los endpoints relacionados con productos están configurados bajo la ruta `/api/products`. A continuación, se presentan las rutas disponibles:

#### GET /api/products

Obtiene todos los productos almacenados en la base de datos.

#### GET /api/products/:pid

Obtiene un producto específico por su ID.

#### POST /api/products

Crea un nuevo producto con los campos especificados. El cuerpo de la solicitud debe contener los siguientes campos:

- `title`: String
- `description`: String
- `code`: String
- `price`: Number
- `status`: Boolean (por defecto: true)
- `stock`: Number
- `category`: String
- `thumbnails`: Array de Strings (contiene las URL de las imágenes)

**Ejemplo del cuerpo de la solicitud:**

```json
{
    "title": "Producto 1",
    "description": "Este es el producto 1",
    "code": "abc1",
    "price": 200,
    "status": true,
    "thumbnails": ["imagen1.jpg", "imagen2.jpg"],
    "stock": 25,
    "category": "Categoría 1"
}
```

#### PUT /api/products/:pid

Actualiza un producto existente identificado por su ID. El cuerpo de la solicitud debe contener los campos a actualizar. El ID del producto no debe modificarse.

#### DELETE /api/products/:pid

Elimina un producto con el ID especificado.

### Carritos

Los endpoints relacionados con carritos están configurados bajo la ruta `/api/carts`. A continuación, se presentan las rutas disponibles:

#### POST /api/carts

Crea un nuevo carrito. El carrito creado tendrá un ID autogenerado y una lista vacía de productos.

#### GET /api/carts/:cid

Obtiene los productos pertenecientes al carrito con el ID especificado.

#### POST /api/carts/:cid/product/:pid

Agrega un producto al carrito especificado. El cuerpo de la solicitud debe contener los siguientes campos:

- `product`: ID del producto a agregar (ID de un producto existente)
- `quantity`: Número de ejemplares a agregar (por defecto: 1)

Nota: Si el producto ya existe en el carrito, el campo `quantity` se incrementará.

### Manejo de Errores

El servidor devuelve respuestas de error apropiadas en los siguientes casos:

- Intento de crear un producto con un código duplicado.
- Intento de agregar un producto inexistente a un carrito.

### Persistencia

La API utiliza el sistema de archivos para almacenar los datos. La información de los productos y carritos se guarda en los archivos `productos.json` y `carrito.json`, respectivamente.

### Para Empezar

Para ejecutar el proyecto, utiliza el siguiente comando:

```shell
npm start
```

Asegúrate de instalar las dependencias necesarias ejecutando `npm install` antes de iniciar el servidor.

### Repositorio

Enlace al repositorio de GitHub: [https://github.com/HolaSoyEsteban/PreEntrega1-Backend-Coderhouse]

Nota: Por favor, excluye la carpeta `node_modules` al compartir el proyecto.

Para probar los endpoints de la API, puedes utilizar herramientas como Postman o la extensión Thunder Client en Visual Studio Code. Ambas opciones te permitirán enviar solicitudes HTTP y recibir respuestas para probar el funcionamiento de la API.
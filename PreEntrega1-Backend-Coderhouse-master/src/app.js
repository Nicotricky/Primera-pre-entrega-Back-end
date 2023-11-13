import express from 'express'
import fs from 'fs'
import productsRouter from './routers/products.router.js'
import cartsRouter from './routers/carts.router.js'

const app = express(); // crea una instancia de una aplicación de express
app.use(express.json()); // middleware para parsear el body de las requests a JSON

const PORT = 8080; // puerto en el que va a escuchar el servidor

app.use('/api/products', productsRouter); // registra el router de productos en la ruta /api/products
app.use('/api/carts', cartsRouter); // registra el router de carritos en la ruta /api/carts


app.listen(PORT, () => console.log('server up')) // levanta el servidor en el puerto especificado

// Pre Entrega 1 de Backend - Terminada!
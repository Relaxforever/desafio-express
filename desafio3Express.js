//import * as fs from 'node:fs/promises';
const express = require('express');
const Contenedor = require('./Desafio 3 Clase')

const ContenedorEx =  new Contenedor('texto1.txt')
const app = express()

const PORT = process.env.PORT || 8080

app.get('/productos', async (req, res) => {
    const arrayAll = await ContenedorEx.getAll()
    console.log(arrayAll)
    res.send( arrayAll)
})

app.get('/productoRandom', async (req, res) => {

    arrayRandom =  await ContenedorEx.getAll()

    res.send( arrayRandom[Math.floor(Math.random() * arrayRandom.length)])
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})









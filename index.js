//Configurar con express el servidor de la app
const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(3000);

//Llamar al objeto mongoClient del componente modngodb
const { MongoClient } = require('mongodb');

//Funcion asincrona para hacer las peticiones
async function consultarTodo() {
    //Crear una instacion de de mongo client
    const client = new MongoClient("Aqui va mi cadena de conexion");

    //Conexion para hacer peticiones
    try {
        const conexion = await client.connect();
        const controlador = conexion.db().collection('users');

        let consulta;

        //Realizando la consulta
        consulta = await controlador.find().toArray();
        console.log('Seleccion: ', consulta);



    } catch (error) {
        console.error('Ocurrio el siguiente error: ', error);
    }

}

async function consultarFiltro() {

    //Crear una instacion de de mongo client
    const client = new MongoClient("");

    //Conexion para hacer peticiones
    try {
        const conexion = await client.connect();
        const controlador = conexion.db().collection('users');

        let consulta,filtro;

        //Realizando la consulta con un filtro
        filtro = {id: 11};
        consulta = await controlador.find(filtro).toArray();
        console.log('Seleccion: ', consulta);



    } catch (error) {
        console.error('Ocurrio el siguiente error: ', error);
    }

}

async function elimiar() {

    //Crear una instacion de de mongo client
    const client = new MongoClient("");

    //Conexion para hacer peticiones
    try {
        const conexion = await client.connect();
        const controlador = conexion.db().collection('users');

        let consulta,filtro;

        //Realizando la consulta con un filtro
        filtro = {id: 5};
        respuesta = await controlador.deleteOne(filtro);
        console.log('Eliminado: ', respuesta);



    } catch (error) {
        console.error('Ocurrio el siguiente error: ', error);
    }

}

consultarFiltro();
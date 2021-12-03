//Imports 
const express = require('express');
const auth = require('./crud/auth');
const migrate = require('./crud/migrate');
const usuarios = require('./crud/usuarios');
const departamentos = require('./crud/departamentos');
const centros_de_custo = require('./crud/centros_de_custo');
const fileupload = require("express-fileupload");
const server = express();


//temp file setup
server.use(fileupload({useTempFiles : true, tempFileDir : './tmp/'}));
server.use(express.json());

//routes


//base routes
server.post('/auth',(req,res) =>{
    set_header(res);
    return auth.token(req,res);

});
server.post('/import',(req,res) =>{
    set_header(res);
    return migrate.csv(req,res);
});






//user routes
server.get('/usuarios',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return usuarios.list(req,res);
});

server.post('/usuarios/create',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return usuarios.create(req,res);
});


server.get('/usuarios/:id',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return usuarios.find(req,res);
});

server.post('/usuarios/update',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return usuarios.update(req,res);
});
server.get('/usuarios/delete/:id',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return usuarios.delete_user(req,res);
});







//departamentos routes
server.get('/departamentos',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return departamentos.list(req,res);
});

server.post('/departamentos/create',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return departamentos.create(req,res);
});

server.post('/departamentos/update',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return departamentos.update(req,res);
});
server.get('/departamentos/:id',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return departamentos.find(req,res);
});
server.get('/departamentos/delete/:id',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return departamentos.delete_departamento(req,res);
});


//centro de controle routes

server.get('/centros_de_custo',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return centros_de_custo.list(req,res);
});

server.post('/centros_de_custo/create',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return centros_de_custo.create(req,res);
});

server.post('/centros_de_custo/update',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return centros_de_custo.update(req,res);
});
server.get('/centros_de_custo/:id',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return centros_de_custo.find(req,res);
});
server.get('/centros_de_custo/delete/:id',(req,res) =>{
    set_header(res);
    auth.valida_token(req,res);
    return centros_de_custo.delete_centros_de_custo(req,res);
});


//options default route
server.options('/*',(req,res) =>{
    var req_return ={ msg:'ok'};
    set_header(res);
    return res.json(req_return);

});


//set header of request
function set_header(res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}





//server start
server.listen(3000)
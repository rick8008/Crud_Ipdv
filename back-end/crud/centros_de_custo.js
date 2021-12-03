var db = require('../crud/db');



async function list(req,res){   
    var list = await db.centros_de_custo.list();
    var return_obj = {
        msg : "ok",
        data : list
    };
    return res.json(return_obj);
}
async function create(req,res){   
    var return_obj = {msg : "ok"}; 
    if (
        typeof req.body.nome !== 'undefined' 
    ){
        await db.centros_de_custo.create(req.body.nome );
       
    }else{
        return_obj.msg  = "error";
    }
    return res.json(return_obj);
}
async function update(req,res){  
    var return_obj = {msg : "ok"}; 
    console.log(req.body);
    if (
        typeof req.body.id !== 'undefined' && 
        typeof req.body.nome !== 'undefined' 
    ){
        await db.centros_de_custo.update(req.body.nome,req.body.id);
    }else{
        return_obj.msg  = "error";
    }
    return res.json(return_obj);

}
async function delete_centros_de_custo(req,res){  
    var return_obj = {msg : "ok"}; 
    if (typeof req.params.id !== 'undefined' ){
        await db.centros_de_custo.delete(req.params.id);
    }else{
        return_obj.msg  = "error";
    }
    return res.json(return_obj);

}

async function find(req,res){  
    var return_obj = {msg : "ok"}; 
    if (typeof req.params.id !== 'undefined' ){
        return_obj.centro_de_custo =  await db.centros_de_custo.find(req.params.id);
    }else{
        return_obj.msg  = "error";
    }
    return res.json(return_obj);

}
module.exports = {  list , create, update, delete_centros_de_custo, find };
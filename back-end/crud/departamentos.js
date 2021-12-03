var db = require('../crud/db');



async function list(req,res){   
    var list = await db.departamentos.list();
    var return_obj = {
        msg : "ok",
        data : list
    };
    return res.json(return_obj);
}

async function create(req,res){   
    var return_obj = {msg : "ok"}; 
    if (
        typeof req.body.nome !== 'undefined' && 
        typeof req.body.centro_de_custo_id  !== 'undefined' 
    ){
        await db.departamentos.create(req.body.nome,req.body.centro_de_custo_id );
       
    }else{
        return_obj.msg  = "error";
    }
    return res.json(return_obj);
}
async function update(req,res){  
    var return_obj = {msg : "ok"}; 
    if (
        typeof req.body.id !== 'undefined' && 
        typeof req.body.nome !== 'undefined' && 
        typeof req.body.centro_de_custo_id !== 'undefined' 
    ){
        await db.departamentos.update(req.body.nome,req.body.centro_de_custo_id,req.body.id);
    }else{
        return_obj.msg  = "error";
    }
    return res.json(return_obj);

}
async function delete_departamento(req,res){  
    var return_obj = {msg : "ok"}; 
    if (typeof req.params.id !== 'undefined' ){
        await db.departamentos.delete(req.params.id);
    }else{
        return_obj.msg  = "error";
    }
    return res.json(return_obj);

}

async function find(req,res){  
    var return_obj = {msg : "ok"}; 
    if (typeof req.params.id !== 'undefined' ){
        return_obj.departamento =  await db.departamentos.find(req.params.id);
    }else{
        return_obj.msg  = "error";
    }
    return res.json(return_obj);

}
module.exports = { list , create, update, delete_departamento, find};
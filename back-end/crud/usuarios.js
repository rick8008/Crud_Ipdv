var db = require('../crud/db');



async function list(req,res){   
    var list = await db.usuarios.list();
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
        typeof req.body.cargo !== 'undefined' && 
        typeof req.body.departamento_id !== 'undefined' 
    ){
        await db.usuarios.create(req.body.nome,req.body.cargo,req.body.departamento_id);
    }else{
        return_obj.msg  = "error";
    }
    return res.json(return_obj);
}

async function find(req,res){  
    var return_obj = {msg : "ok"}; 
    if (typeof req.params.id !== 'undefined' ){
        return_obj.user =  await db.usuarios.find(req.params.id);
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
        typeof req.body.cargo !== 'undefined' && 
        typeof req.body.departamento_id !== 'undefined' 
    ){
        await db.usuarios.update(req.body.nome,req.body.cargo,req.body.departamento_id,req.body.id);
    }else{
        return_obj.msg  = "error";
    }
    return res.json(return_obj);
}

async function delete_user(req,res){  
    var return_obj = {msg : "ok"}; 
    if (typeof req.params.id !== 'undefined' ){
        await db.usuarios.delete(req.params.id);
    }else{
        return_obj.msg  = "error";
    }
    return res.json(return_obj);
}


module.exports = { list,create,find,update,delete_user};
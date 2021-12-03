var mysql = require('mysql');
var config = require('../config');

var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password
});

con.connect();


function update_token(user,token){
    var query = 'INSERT INTO ipdv_crud.session_token SET nome = "'+user+'", token = "'+token+'",created_at = "'+Date.now()+'" ON DUPLICATE KEY UPDATE token = "'+token+'",created_at = "'+Date.now()+'" ;';
    con.query(query, function (err, result) {
        if (err) throw err;
        
      });

}
async function token(token){
    
    var query = 'SELECT * FROM ipdv_crud.session_token where token = "'+token+'"';
    token_obj = await new Promise((resolve, reject) => {
        con.query(query, async function (err, result) {
            if (err) throw err;
            return resolve(result[0]);
           
        });

    }); 
    return token_obj;
}




var centros_de_custo = {

    "create" : async function (nome){
        var query = 'INSERT INTO ipdv_crud.centros_de_custo SET nome = "'+nome+'"; ';
        var return_status = 0;
        await con.query(query, function (err, result) {
            if (!err){
                return_status = 0;
            } 
        });
        return return_status;
    },
    "select_id" :  async function (nome){
        id_return = '';
        var query = 'SELECT id FROM ipdv_crud.centros_de_custo where nome = "'+nome+'"; ';
        
        id_return = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result[0].id);
               
            });

        }); 
        return id_return;
    },
    "list":async function (){
        var query = 'SELECT * FROM ipdv_crud.centros_de_custo;';
        return_obj = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result);
            });

        });
        return return_obj; 
    }, 
    "update":async function (nome,id){
        var query = 'UPDATE ipdv_crud.centros_de_custo SET nome = "'+nome+'"  where id = "'+id+'"  ; ';
        return_obj = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result);
            });

        });
        return return_obj; 
    },
    "delete":async function (id){
        var query = 'DELETE FROM ipdv_crud.usuarios WHERE id IN ( SELECT * FROM ( select usuarios.id  from ipdv_crud.centros_de_custo join ipdv_crud.departamentos on departamentos.centro_de_custo_id = centros_de_custo.id join ipdv_crud.usuarios on usuarios.departamento_id - departamentos.id where centros_de_custo.id = "'+id+'" ) AS p)';
        
        var query2 = 'DELETE FROM ipdv_crud.departamentos WHERE centro_de_custo_id = '+id+';';
        var query3 = 'DELETE FROM ipdv_crud.centros_de_custo WHERE id = '+id+';';
       
        return_obj = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result);
            });
            con.query(query2, async function (err, result) {
                if (err) throw err;
                return resolve(result);
            });
            con.query(query3, async function (err, result) {
                if (err) throw err;
                return resolve(result);
            });

        });
        return return_obj; 
    },
    "find":async function (id){
        var query = 'SELECT * FROM ipdv_crud.centros_de_custo where id = "'+id+'"';
        return_obj = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result[0]);
            });

        });
        return return_obj; 
    }

}

var departamentos = {
    "create" : async function (nome,id_centro){
        var query = 'INSERT INTO ipdv_crud.departamentos SET nome = "'+nome+'" ,  centro_de_custo_id = "'+id_centro+'"  ; ';
        var return_status = 0;
        await con.query(query, function (err, result) {
            if (!err){
                return_status = 0;
            } 
        });
        return return_status;
    },
    "select_id" :  async function (nome){
        id_return = '';
        var query = 'SELECT id FROM ipdv_crud.departamentos where nome = "'+nome+'"; ';
        
        id_return = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result[0].id);
               
            });

        }); 
        return id_return;
    },
    "list":async function (){
        var query = 'SELECT departamentos.id as "id", departamentos.nome as "nome",centros_de_custo.nome as "centro_de_custo" FROM ipdv_crud.departamentos join ipdv_crud.centros_de_custo on centros_de_custo.id =  departamentos.centro_de_custo_id ;';
        return_obj = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result);
            });

        });
        return return_obj; 
    },
    "update":async function (nome,centro_de_custo_id,id){
        var query = 'UPDATE ipdv_crud.departamentos SET nome = "'+nome+'" ,  centro_de_custo_id = "'+centro_de_custo_id+'" where id = "'+id+'"  ; ';
        return_obj = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result);
            });

        });
        return return_obj; 
    },
    "delete":async function (id){
        var query = 'DELETE FROM ipdv_crud.usuarios WHERE departamento_id ='+id+' ';
        var query2 = 'DELETE FROM ipdv_crud.departamentos WHERE id = '+id+';';
        return_obj = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result);
            });
            con.query(query2, async function (err, result) {
                if (err) throw err;
                return resolve(result);
            });

        });
        return return_obj; 
    },
    "find":async function (id){
        var query = 'SELECT * FROM ipdv_crud.departamentos where id = "'+id+'"';
        return_obj = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result[0]);
            });

        });
        return return_obj; 
    }
}

var usuarios = {
    "create" : async function (nome,cargo,departamento_id){
        var query = 'INSERT INTO ipdv_crud.usuarios SET nome = "'+nome+'" ,  cargo = "'+cargo+'", departamento_id = "'+departamento_id+'"  ; ';
        var return_status = 0;
        await con.query(query, function (err) {
            if (!err){
                return_status = 0;
            } 
        });
        return return_status;
    },
    "list":async function (){
        var query = 'SELECT usuarios.id,usuarios.nome as "nome", cargo, departamentos.nome as "departamento" , centros_de_custo.nome as "centro_de_custo" FROM ipdv_crud.usuarios join ipdv_crud.departamentos on usuarios.departamento_id =  departamentos.id join ipdv_crud.centros_de_custo on centros_de_custo.id =  departamentos.centro_de_custo_id;';
        return_obj = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result);
            });

        });
        return return_obj; 
    },
    "find":async function (id){
        var query = 'SELECT * FROM ipdv_crud.usuarios where id = "'+id+'"';
        return_obj = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result[0]);
            });

        });
        return return_obj; 
    },
    "update":async function (nome,cargo,departamento_id,id){
        var query = 'UPDATE ipdv_crud.usuarios SET nome = "'+nome+'" ,  cargo = "'+cargo+'", departamento_id = "'+departamento_id+'" where id = "'+id+'"  ; ';
        return_obj = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result);
            });

        });
        return return_obj; 
    },
    "delete":async function (id){
        var query = 'DELETE FROM ipdv_crud.usuarios where id = "'+id+'"';
        return_obj = await new Promise((resolve, reject) => {
            con.query(query, async function (err, result) {
                if (err) throw err;
                return resolve(result);
            });

        });
        return return_obj; 
    }
}


module.exports = { update_token , centros_de_custo , departamentos, usuarios, token};
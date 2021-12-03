var db = require('../crud/db');
var fs = require('fs'); 
var parse = require('csv-parse').parse;

async function csv(req,res){
   
    var csvData= format_data (await csv_to_array(req.files.foo.tempFilePath));
    var insert_obj = insert(csvData);
    var req_return ={ msg:'ok'};

    return res.json(req_return);
}




async function insert(obj_array){

    centros_de_custo = [];

    // insert centros_de_custo
    obj_array.forEach(function (obj) {
        centros_de_custo.push(obj.centro_de_custo)  
    });

    //remove duplicated values of the array
    centros_de_custo = centros_de_custo.filter((v, i, a) => a.indexOf(v) === i);
    guide_centros_de_custo = await new Promise(async (resolve) =>  {
        guide_centros_de_custo_prom = {}
        for (const centro of centros_de_custo) {
            centronome = centro;
            db.centros_de_custo.create(centronome);
            guide_centros_de_custo_prom[centro] = await db.centros_de_custo.select_id(centro)
        };
        return resolve(guide_centros_de_custo_prom);

    });
 
    

    // insert departamentos
    departamentos = await new Promise(async (resolve) =>  {
        departamentos_pre = [];
        for (const obj of obj_array) {
            departamentos_pre.push({[obj.departamento] : guide_centros_de_custo[obj.centro_de_custo]});  
        } 
        return resolve(departamentos_pre);
    });

    departamentos = departamentos.filter((v, i, a) => a.indexOf(v) === i);

    guide_departamento = await new Promise(async (resolve) =>  {
        guide_departamento_prom = {}
        for (const obj of departamentos) {
            db.departamentos.create(Object.keys(obj)[0],obj[Object.keys(obj)[0]]);
            guide_departamento_prom[Object.keys(obj)[0]] = await db.departamentos.select_id(Object.keys(obj)[0]);
        };
        return resolve(guide_departamento_prom);
    });    


    // insert usuarios
    usuarios = await new Promise(async (resolve) =>  {
        usuarios_pre = [];
        for (const obj of obj_array) {
           
            usuarios_pre.push({ "nome" : obj.nome ,"cargo": obj.nome , "departamento_id" : guide_departamento_prom[obj.departamento] });  
        } 
        return resolve(usuarios_pre);
    });


    await new Promise(async (resolve) =>  {
        for (const user of usuarios) {
            await db.usuarios.create(user.nome, user.cargo ,user.departamento_id);
        } 
        return resolve();
    });
    return "ok";
 
}


function format_data(csv_array){
    var return_obj = [];
    var header = [];
    
    csv_array.forEach(function (row, i_row) {
        var row_obj = {};
        row.forEach(function (col, i_col) {
            if(i_row == 0){
                header.push(col);
               
            }else{
               row_obj[header[i_col]] = col;
            }
        });
        if(i_row != 0){
            return_obj.push(row_obj); 
        }
    });
       

    return  return_obj;
        
   
}

async function csv_to_array(filepath){
   
    return_data = [];
    var readStream = fs.createReadStream(filepath);
    readStream2 = await  readStream.pipe(parse());

    for await (const csvrow of readStream2) {
        var csvcol = csvrow[0].split(';');
        return_data.push(csvcol);
      }
    return return_data
  }


module.exports = { csv };
var db = require('../crud/db');

function token(req,res){
   
    if (typeof req.body.user !== 'undefined' ){
       
        var token = generate_token(18)
        db.update_token(req.body.user,token); 

        var req_return ={ msg:'ok', token : token};
    }else{
        var req_return ={ msg:'erro'};
    }
    return res.json(req_return);
}


async function valida_token(req,res){
    var token = {};
    if (typeof req.body.token !== 'undefined' ){
        token =  await db.token(req.body.token); 
    }
    else if(typeof req.query.token !== 'undefined'){
        token =  await db.token(req.query.token);
    }
    else{
        var req_return ={ msg:'token invalido'};
        return res.json(req_return);
    }

   
    var seconds = ( Date.now()- token.created_at) / 1000;
    if(seconds >= 60){
        return res.json(req_return);
    }
}
    


function generate_token(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_+';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


module.exports = { token ,valida_token};
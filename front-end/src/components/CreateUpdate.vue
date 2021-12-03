<template>
  <div class='row justify-content-center'>
    <h1>{{titulo}}</h1>
    
    <div class='col-8 col-sm-7' v-for="(item) in this.campos " :key="item.id">
        
        <div class="form-group" v-if ="item.type == 'string'">
                <label >{{item.name}}</label>
                <input type="password"  class="form-control mx-sm-3"  v-model="item.value">
            </div>
            
       
        <div v-if ="item.type == 'hidden'">
        <input type='hidden'  v-model="item.value"  > 
        </div>
        <div v-if ="item.type == 'select'">
            <p>{{item.name}} : 
                <select name="select"  class="form-control"  v-model="item.value " > 
                    <option :value="opt.id" v-for="(opt) in item.opt " :key="opt.id">{{opt.nome}}</option>
                </select>
            </p>
        </div>
        
    </div>
  </div>
  <button type="submit" @click="request()" class="btn btn-primary" > {{titulo}} </button>
</template>

<script>
import axios from 'axios'

export default {
    props : {
        url : String,
        titulo : String,
        campos : Array,
        redirect : String,
        
    },
    data() {
        return{
           request_obj : []
        }

    },
    methods: {
        
        request(){
            var obj = {};
            for (var campo in  this.campos) {
                
                obj[this.campos[campo].name] = this.campos[campo].value; 
              
            }
            obj.token  = sessionStorage.getItem('token');
            axios.post(this.url,obj,{headers: {}}).then((response)=>{
                if(response.data.msg == 'ok'){
                   this.$router.push(this.redirect)
                   
                }else{
                alert(this.titulo+' error');
               
                }
                
            })
        }
        

    },

    mounted() {
       
     
          
           
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
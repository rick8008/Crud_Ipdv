<template>
  <div class="home">
    <CreateUpdate
      url = "http://localhost:3000/usuarios/update"
      titulo = "Atualizar Usuário"
      redirect = "/usuarios"
      v-bind:campos =" this.form_info"
    />
    
  </div>
</template>

<script>
// @ is an alias to /src
import CreateUpdate from '@/components/CreateUpdate.vue'
import axios from 'axios'

export default {
  name: 'UpdateUser',
  components: {
     CreateUpdate
  },
  data() {
    return{
      form_info : []
    }
  },
  methods: {

        get_list_data() {
         
          axios.get('http://localhost:3000/usuarios/'+this.$route.params.id,{params: {"token" : sessionStorage.getItem('token')}},{headers: {}}).then((response)=>{
            if(response.data.msg == 'ok'){
              
              
               
                for (var key in response.data.user) {
                if(key == 'departamento_id'){
                  axios.get('http://localhost:3000/departamentos',{params: {"token" : sessionStorage.getItem('token')}},{headers: {}}).then((response2)=>{
                      if(response2.data.msg == 'ok'){
                          this.form_info.push(
                            {
                              type : "select",
                              value : response.data.user[key],
                              name : "departamento_id",
                              opt : response2.data.data
                            }

                          );
                      }else{
                      alert('List error');
                      }
                        
                    });
                  }
                  else if(key == 'id'){
                    this.form_info.push( {
                      type :"hidden",
                      value : response.data.user[key],
                      name : key
                    });
                  }
                  else{
                     
                    this.form_info.push( {
                    type :"string",
                    value : response.data.user[key],
                    name : key
                  });
                  }
                 
               }
            }
          });
        
        }

    },

    mounted() {
         this.get_list_data()
    
    }
}
</script>
<template>
  <div class="home">
    <CreateUpdate
      url = "http://localhost:3000/centros_de_custo/update"
      titulo = "Atualizar Centro de Custo"
      redirect = "/centros_de_custo"
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
         
          axios.get('http://localhost:3000/centros_de_custo/'+this.$route.params.id,{params: {"token" : sessionStorage.getItem('token')}},{headers: {}}).then((response)=>{
            if(response.data.msg == 'ok'){
               
                for (var key in response.data.centro_de_custo) {
               
                  if(key == 'id'){
                    this.form_info.push( {
                      type :"hidden",
                      value : response.data.centro_de_custo[key],
                      name : key
                    });
                  }
                  else{
                     
                    this.form_info.push( {
                    type :"string",
                    value : response.data.centro_de_custo[key],
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
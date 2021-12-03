<template>
  <div class="home">
    <CreateUpdate
      url = "http://localhost:3000/departamentos/create"
      titulo = "Criar Departamento"
      redirect = "/usuarios"
      v-bind:campos =" this.form_info "
      

    />
    
  </div>
</template>

<script>
// @ is an alias to /src
import CreateUpdate from '@/components/CreateUpdate.vue'
import axios from 'axios'

export default {
  name: 'CreateUser',
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
            axios.get('http://localhost:3000/centros_de_custo',{params: {"token" : sessionStorage.getItem('token')}},{headers: {}}).then((response)=>{
                if(response.data.msg == 'ok'){

                    this.form_info.push(
                      {
                        type :"string",
                        value : "",
                        name : "nome"
                      },
                      {
                        type : "select",
                        value : "",
                        name : "centro_de_custo_id",
                        opt : response.data.data
                      }

                    )



                    this.data_table = response.data.data;
                   
                }else{
                alert('List error');
                }
                
            })
        }

    },

    created() {
        this.get_list_data()
    
    }
}
</script>
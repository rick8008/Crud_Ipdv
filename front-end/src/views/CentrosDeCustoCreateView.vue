<template>
  <div class="home">
    <CreateUpdate
      url = "http://localhost:3000/centros_de_custo/create"
      titulo = "Criar centros De Custo"
      redirect = "/centros_de_custo"
      v-bind:campos =" this.form_info "
      

    />
    
  </div>
</template>

<script>
// @ is an alias to /src
import CreateUpdate from '@/components/CreateUpdate.vue'


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
            this.form_info.push(
                      {
                        type :"string",
                        value : "",
                        name : "nome"
                      }

                    )
        }

    },

    created() {
        this.get_list_data()
    
    }
}
</script>
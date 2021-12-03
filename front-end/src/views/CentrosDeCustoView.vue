<template>
  <div class="home">
    <CentrosDeCusto/>
    <div class='container'>
      <div class='mt-4 row justify-content-center'>
        <div class="col-12 col-md-6">
           <List url = 'http://localhost:3000/centros_de_custo' edit="/centros_de_custo/update/" delete_p="/centros_de_custo/delete/"/>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import CentrosDeCusto from '@/components/CentrosDeCusto.vue'

import List from '@/components/List.vue'
export default {
  name: 'CreateUser',
  components: {
    CentrosDeCusto ,
    List
  }
}
</script>
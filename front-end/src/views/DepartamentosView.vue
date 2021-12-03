<template>
  <div class="home">
    <Departamentos/>
    <div class='container'>
      <div class='mt-4 row justify-content-center'>
        <div class="col-12 col-md-6">
           <List url = 'http://localhost:3000/departamentos' edit="/departamentos/update/" delete_p="/departamentos/delete/"/>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import Departamentos from '@/components/Departamentos.vue'

import List from '@/components/List.vue'
export default {
  name: 'CreateUser',
  components: {
    Departamentos ,
    List
  }
}
</script>
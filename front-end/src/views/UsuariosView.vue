<template>
  <div class="home">
    <Usuarios/>
    <div class='container'>
      <div class='mt-4 row justify-content-center'>
        <div class="col-12 col-md-6">
          <List url = 'http://localhost:3000/usuarios' edit="/usuarios/update/" delete_p="/usuarios/delete/"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Usuarios from '@/components/Usuarios.vue'

import List from '@/components/List.vue'
export default {
  name: 'CreateUser',
  components: {
    Usuarios ,
    List
  }
}
</script>
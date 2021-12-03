<template>
  <div class="container">
    <h1>Usuários</h1>
    <div class='mt-4 row justify-content-center'>
       <div class="col-6 col-md-4 text-center">
          <router-link :to="{ name: 'Home'}">
            <button type="button" class="btn btn-secondary"  > Voltar</button>
          </router-link>
      </div>
      <div class="col-6 col-md-4 text-center">
          <router-link :to="{ name: 'UsuariosCreate'}">
            <button type="button" class="btn btn-primary"  > Criar Usuário</button>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Usuarios'
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

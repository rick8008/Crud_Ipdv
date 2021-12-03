<template>
  <div class="container">
    <h1>Crud</h1>
  </div>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <router-link :to="{ name: 'Usuarios'}">
        <button type="button" class="btn btn-primary"  > Gerenciar Usuários</button>
      </router-link>
      <br>
      <br>
       <router-link :to="{ name: 'Departamentos'}">
        <button type="button" class="btn btn-primary"  > Gerenciar Departamentos</button>
      </router-link>
      <br>
      <br>
       <router-link :to="{ name: 'CentrosDeCusto'}">
        <button type="button" class="btn btn-primary"  > Gerenciar Centros De Gasto</button>
      </router-link>
      <br>
      <br>
      <router-link :to="{ name: 'MigrateView'}">
        <button type="button" class="btn btn-primary"  > Importar csv</button>
      </router-link>
    </div>


    
  </div>
</template>

<script>
export default {
  name: 'Home',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

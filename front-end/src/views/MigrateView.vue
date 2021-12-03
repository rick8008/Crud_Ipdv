<template>
  <div class="hello">
    <h1>Usuários</h1>
    <div class='mt-4 row justify-content-center'>
      <div class="col-12 col-md-6">
         <form action="http://localhost:3000/import" target="_blank" method="post" enctype="multipart/form-data">
          Selecione um cvs:
          <div class="form-group">
           
            <input type="file" class="form-control-file" name="foo" id="foo">
          </div>
          
          <br>
          <br>
          <button type="submit" class="btn btn-primary"  >Migrar Dados</button>

        </form>
      </div>
    </div>
  </div>
    
  
</template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

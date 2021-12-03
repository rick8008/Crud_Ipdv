<template>
  <div class="about">
    <h1>Verificação</h1>
    <div>
     <p>Nome :</p>
     <input type="text" id="nome" name="nome" class="input" v-model="nome" >
    </div>
    <div>
    <button type="submit" @click="auth(nome)" > Validar </button>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  
  nome : '',
  methods: {
    auth(nome) {
      axios.post('http://localhost:3000/auth',{"user":nome},{headers: {}}).then((response)=>{
        if(response.data.msg == 'ok'){
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('user', nome);
          this.$router.push('/');
        }else{
          alert('Verification error');
        }
        
      })
    }
  }



  
}
  
  


</script>
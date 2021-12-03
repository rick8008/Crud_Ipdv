<template>
  <router-view/>
 
</template>

<script>

import axios from 'axios'

export default {
  methods: {
    renova_token(){
      var nome = sessionStorage.getItem('user');
      axios.post('http://localhost:3000/auth',{"user":nome},{headers: {}}).then((response)=>{
          if(response.data.msg == 'ok'){
            console.log('renovou');
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('user', nome);
          }else{
            sessionStorage.removeItem('token'); 
            sessionStorage.removeItem('user'); 
            this.$router.push('verification')
          }
      });
      setTimeout(this.renova_token, 50000);
    }
  },
  created() { 




    var token = sessionStorage.getItem('token');
    if(token == null && this.$route.path != '/verification'){
      this.$router.push('verification')
    }
    else{
      setTimeout(this.renova_token, 10000);   
    }
  }
};
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'

export default {
  name: 'DeleteDepartamento',
  components: {
  },
  data() {
    return{
      form_info : []
    }
  },
  methods: {

      

    },

    created() {
      axios.get('http://localhost:3000/departamentos/delete/'+this.$route.params.id,{params: {"token" : sessionStorage.getItem('token')}},{headers: {}}).then((response2)=>{
        if(response2.data.msg == 'ok'){
           this.$router.push('/departamentos');
        }else{
        alert('Delete User error');
        }
          
      });
    
    }
}
</script>
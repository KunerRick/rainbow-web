<template>
    <div id="Auth" class="container">
      <router-view/>
    </div>
</template>

<script>
import Login from '@/components/Login'
  export default {
    name: 'Auth',
      render:function(c){
        return c(Login);
      }
  }
</script>


<style scoped>
  .container{
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: white;
  }

</style> 
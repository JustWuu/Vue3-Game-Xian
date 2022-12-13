<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <nav>
    <RouterLink to="/home">洞府</RouterLink>  
    <RouterLink to="/make">鍛造</RouterLink>
    <RouterLink to="/alchemy">煉丹</RouterLink>
    <RouterLink to="/sublimation">修煉</RouterLink>
    <RouterLink to="/pack">行囊</RouterLink>
    <RouterLink to="/start">旅途</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 5%;
  font-size: 1.2rem;
  background: #2940b1;
  border-radius: 0px 0 0 0;
  text-align: center;
  a{
  width: 15%;
  display: inline-block;
  padding: 0.1rem .9rem;
  color: rgba(173, 172, 172, 0.624);
  text-decoration: none;
  }
  a:hover{
    background: #838fcd;
    color: #000;
    transition: .5s;
    border-radius: 5px;
  }
}
nav a.router-link-active {
  color: rgb(252, 252, 252);
  background: #2940b1;
}

</style>
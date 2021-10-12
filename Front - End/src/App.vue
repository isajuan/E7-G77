<template>
  <div class="container-fluid" id="app">
    <div class="" id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/clientes">Clientes</router-link> |
      <router-link to="/menus">Menús</router-link> |
      <router-link to="/pedidos">Pedidos</router-link> 
    </div>
    <router-view/>
  </div>
</template>

 



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color:blue;
}
</style>


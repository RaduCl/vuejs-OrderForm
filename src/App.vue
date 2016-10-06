<template>
  <div id="app">
    <quote></quote>
    <side-menu></side-menu>
  </div>
</template>

<script>
import Quote from './components/Quote/index';
import SideMenu from './components/SideMenu/index';


export default {
  components: {
    Quote,
    SideMenu,
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  color: #2c3e50;
  background-color:  #2c3e50;
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-content: stretch;
  flex-wrap: nowrap;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>

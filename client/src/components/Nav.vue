<template lang="html">
  <div class="nav">

    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <router-link :to="{ name: 'home'} " @click="closeNav()">Home</router-link>
      <br>
      <router-link :to="{ name: 'moreinfo'}" @click="closeNav()">MoreInfo</router-link>
    </div>

    <span class="hamburger" style="font-size:30px;cursor:pointer" @click="openNav()">&#9776; </span>

  </div>

</div>

</template>

<script>
export default {
  name: 'navBar',
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "25%";
    },

    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
}

</script>

<style lang="css" scoped>
margin-top: 0px;
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #2c3e50;

body {
  font-family: "Lato", sans-serif;
}

.hamburger {
  float: left;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align:center;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;

}

.sidenav a:hover{
  color: #f1f1f1;
}
.sidenav router-link {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;

}

.sidenav router-link:hover{
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>

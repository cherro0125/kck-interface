<template>
  <v-app>


    <v-content>
      <v-app-bar
              color="deep-purple accent-4"
              dense
              dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>AI Camera</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="purple" @click="logout" > <v-icon  small dark>fa-sign-out-alt</v-icon></v-btn>
      </v-app-bar>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

  import loginService from './service/LoginService';
export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
  methods:{
    logout(){
      loginService.setIsLogged(false);
      this.$router.push("/login");
    }
  },
  computed:{
    isLogged(){
      return loginService.getIsLogged();
    }
  }
};
</script>

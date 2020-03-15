<template>
  <v-app>
    <v-app-bar app color="rgb(0, 0, 255)" dark>
      <v-spacer></v-spacer>

      <v-btn text>
        <v-icon>mdi-login</v-icon>
        <span class="mr-2">Log in</span>
      </v-btn>
      <v-btn text>
        <span class="mr-2">Log out</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- <v-content>
      <HelloWorld/>
    </v-content>-->
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    //HelloWorld,
  },

  data: () => ({
    //
  })
};
</script>

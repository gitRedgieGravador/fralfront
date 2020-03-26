<template>
  <div id="card">
    <div class="background">
      <v-img
        class="user_image"
        src="https://professionalsofthefuture.com/wp-content/uploads/2018/12/user-icon.png"
      ></v-img>
    </div>
    <br>
    <p class="name">{{data.name}}</p>
    <v-row class="buttons">
      <v-col cols="6">
        <v-btn block outlined color="success" class="action" @click="edit">
          <v-icon>mdi mdi-pen</v-icon>Edit
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn block outlined color="primary" class="action" @click="logout">
          <v-icon>mdi mdi-logout</v-icon>Logout
        </v-btn>
      </v-col>
    </v-row>
    <div class="ml-10 mt-10">
      <p>Address: {{data.address}}</p>
      <p>Cellphone No.: {{data.number}}</p>
    </div>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card class="dialog_card">
        <v-card-title>Edit Information</v-card-title>
        <v-text-field v-model="data.name" required>{{data.name}}</v-text-field>
        <v-text-field v-model="data.address" required>{{data.address}}</v-text-field>
        <v-text-field v-model="data.number" required>{{data.number}}</v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.user_image {
  height: 140px;
  width: 140px;
  margin-left: 27%;
}
.name {
  font-weight: 700;
  margin-left: 30%;
}
.dialog_card {
  padding: 5%;
}
.background {
  background-image: url("https://metro.co.uk/wp-content/uploads/2019/11/goods_thumb_01-de3b.jpg?quality=90&strip=all");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
</style>

<script>
export default {
  name: "card",
  components: {
    //card
  },
  data() {
    return {
      data: {
        name: "Redgie Gravador",
        address: "Talamban, Cebu City",
        number: "09123456789"
      },
      dialog: false
    };
  },
  methods: {
    edit() {
      this.dialog = true;
    },
    logout() {
      this.$router.push("/home");
    }
  }
};
</script>
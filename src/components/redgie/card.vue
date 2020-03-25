<template>
  <div>
    <div>
      <center>
        <v-card class="d-inline-block mx-auto" width="150px">
          <v-container>
            <p class="price">2500.00</p>
            <v-row>
              <v-img height="120" width="130" src="~@/assets/yellow.jpg" class="item"></v-img>
            </v-row>
            <p class="name">name</p>
            <v-row class="footer">
              <v-col cols="6">
                <v-btn block outlined color="success" class="action">
                  <v-icon>mdi mdi-cart</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn block outlined color="primary" class="action">
                  <v-icon>mdi mdi-information-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </center>
    </div>
  </div>
</template>
<style scoped>
.name {
    font-size: 12px;
    position: relative;
}
.footer {
  bottom: 0px;
  background: transparent !important;
  z-index: 1;
  height: 45px;
}
.item {
  position: relative;
}

.price {
  position: sticky;
  margin-bottom: -12px;
  margin-right: 30%;
  z-index: 3;
  font-size: 16px;
}
.action {
  font-size: 8px;
  width: 60px !important;
}
</style>

<script>
/* eslint-disable */

export default {
  name: "cart",
  component: {
    //card
  }
};
</script>
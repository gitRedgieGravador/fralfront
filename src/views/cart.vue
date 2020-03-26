<template>
  <div id="card">
    <div class="pa-2">
      <div v-for="(each, i) in 5" :key="i" class="pt-2 pb-2">

        <CartCard></CartCard>

      </div>
      <br>
      <v-card outlined class="pa-2">
        <h3>Delivery Infomation</h3>
        <v-row>
          <v-col cols="10">
            <h5>Address: Basak Lapu lapu city</h5>
            <h5>Mobile: 09123456789</h5>
          </v-col>
          <v-col>
            <v-icon>mdi mdi-table-edit</v-icon>
          </v-col>
        </v-row>
        <v-footer class="nopadding confooter">
          <v-row class="ml-5 conElem">
            <v-col>
              <v-switch v-model="confirm" class="ma-2"></v-switch>
            </v-col>
            <v-col>
              <h3 id="conf-tx">Confirm</h3>
            </v-col>
          </v-row>
        </v-footer>
      </v-card>
      <br>
      <v-btn id="btnOrder" color="red" block :disabled="!confirm">Order Now</v-btn>

      <br>
      <br>
      <br>
    </div>
  </div>
</template>
<style scoped>
#btnOrder {
  height: 50px !important;
}
.conElem {
    margin-top: -10px !important;
}
.confooter {
    height: 50px !important;
    margin-top: -10px;
}
#conf-tx {
  position: relative !important;
  right: 80px;
  margin-top: 10px;
}
.nopadding {
  padding: 0px !important;
}
.cd-details {
  margin-left: -80px !important;
}

.bright {
  border-right: 1px solid gray;
  padding-left: 10px !important;
  padding-left: 7% !important;
}
</style>

<script>
/* eslint-disable */
import CartCard from '../components/redgie/CartCard.vue';
export default {
  name: "card",
  components: {
    CartCard
  },
  data() {
    return {
      confirm: false
    };
  }
};
</script>
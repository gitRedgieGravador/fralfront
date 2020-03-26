<template>
  <div id="card">
    <div class="pa-2">
      <div v-for="(each, i) in 5" :key="i" class="pt-2 pb-2">
        <v-card outlined>
          <v-row>
            <v-col cols="10" class="bright nopadding">
              <v-row>
                <v-col class="nopadding">
                  <img class="my-img" height="100" width="100" src="~@/assets/yellow.jpg">
                </v-col>
                <v-col class="cd-details">
                  <h3>RACE Shoes</h3>
                  <h5>2500.00</h5>
                  <h5>2 pairs</h5>
                  <h5>#shoes #male</h5>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="pa-5">
              <v-row>
                <v-icon>mdi mdi-table-edit</v-icon>
              </v-row>
              <br>
              <v-row>
                <v-icon>mdi mdi-delete</v-icon>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </div>
      <br>
      <v-card outlined class="pa-2">
        <h3>Delivery Infomation</h3>
        <v-row>
          <v-col>
            <h5>Address: Basak Lapu lapu city</h5>
          </v-col>
          <v-col>
            <span>
              <v-icon>mdi mdi-table-edit</v-icon>
            </span>
            <span>
              <v-switch v-model="chips" class="ma-2" label="Chips"></v-switch>
            </span>
          </v-col>
        </v-row>
        <h5>Mobile: 09123456789</h5>
      </v-card>
      <br>
      <v-btn block>confirm</v-btn>

      <br>
      <br>
      <br>
    </div>
  </div>
</template>
<style scoped>
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

export default {
  name: "card",
  component: {
    //card
  },
  data() {
    return {};
  }
};
</script>
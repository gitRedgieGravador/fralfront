<template>
  <div>
      <v-row class="text-center nopaddingtb">
        <v-col class="nopaddingtb">
          <v-row class="nopaddingtb">
            <v-col>
              <p>Particular</p>
            </v-col>
            <v-col>
              <p>Quantity</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4" class="mt-3 nopaddingtb">
            <p>Price</p>
        </v-col>
      </v-row>
      <hr>
    <div v-for="(each, i) in items" :key="i">
      <v-row class="text-center">
        <v-col>
          <v-row>
            <v-col>
              <p>{{each.name}}</p>
            </v-col>
            <v-col>
              <p>{{each.quantity}}</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4" class="mt-3">
            <p>{{each.price}}</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<style scoped>
.nopaddingtb{
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}
</style>

<script>
export default {
  name: "checkout",
  props: {
    items: Array
  },
  data() {
    return {
      //
    };
  }
};
</script>

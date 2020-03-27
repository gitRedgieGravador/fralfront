<template>
  <div>
    <div v-for="(each, i) in items" :key="i">
      <v-row>
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
        <v-col cols="4">
            <p>{{each.price}}</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
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

<template>
  <div>
    <v-card>
      <v-row class="ml-3">
        <v-col cols="10" class="bright nopadding">
          <v-row>
            <v-col class="nopadding">
              <img class="my-img" height="100" width="100" src="~@/assets/yellow.jpg">
            </v-col>
            <v-col class="cd-details">
              <h3>{{item.name}}</h3>
              <h5>{{item.price}}</h5>
              <h3>
                <code>{{item.quantity}}</code> pairs
              </h3>
              <h5>{{item.category}}</h5>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <hr>
      <v-row class="text-center">
        <v-col>
          <v-btn text class="btnInc" @click="btnDecClick">-</v-btn>
        </v-col>

        <v-col>
          <v-text-field class="btnInc" type="number" v-model="quantity" hide-details></v-text-field>
        </v-col>
        <v-col>
          <v-btn text class="btnInc" @click="btnIncClick">+</v-btn>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>
      <v-row class="pl-2 pr-2">
        <v-col>
          <v-btn block color="secondary" @click="btnCancel" dark>Cancel</v-btn>
        </v-col>
        <v-col v-if="!inCart">
          <v-btn block color="red" @click="btnAddtoCart" dark>Add to Cart</v-btn>
        </v-col>
        <v-col v-if="inCart">
          <v-btn block color="green" @click="btnAddtoCart" dark>Save</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<style scoped>
.test {
  border: 1px solid;
}
#quantity {
  font-size: 35px;
}
@media only screen and (max-width: 700px) {
  .rm {
    padding-left: calc(100% - 332px);
  }
}
.center {
  display: flex;
}
.btnInc {
  font-size: 35px !important;
}
.nopadding {
  padding: 0px !important;
}
</style>

<script>
export default {
  name: "quantity",
  props: {
    item: Object,
    inCart: Boolean
  },
  data() {
    return {
      quantity: 2
    };
  },
  methods: {
    btnIncClick() {
      this.item.quantity = parseInt(this.item.quantity) + 1;
    },
    btnDecClick() {
      if (parseInt(this.item.quantity) > 2) {
        this.item.quantity = parseInt(this.item.quantity) - 1;
      }
    },
    btnCancel() {
      this.$emit("btnCancel");
    },
    btnAddtoCart() {
      this.$emit("btnAddtoCart");
    }
  }
};
</script>

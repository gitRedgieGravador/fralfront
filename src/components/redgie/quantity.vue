<template>
  <div>
    <v-card>
      <v-row class="ml-3">
        <v-col cols="10" class="bright nopadding">
          <v-row>
            <v-col class="nopadding">
              <img class="my-img" height="100" width="100" :src="url">
            </v-col>
            <v-col class="cd-details">
              <h5>{{item.name}}</h5>
              <h5>{{item.price}} pesos</h5>
              <h5>
                <code>{{quantity}}</code> pairs
              </h5>
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
          <v-text-field
            :rules="[rules.required, rules.max]"
            class="fn-20"
            type="number"
            v-model="quantity"
            hide-details
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-btn text class="btnInc" @click="btnIncClick">+</v-btn>
        </v-col>
      </v-row>
      <!-- alert for quantity more than available -->
      <v-alert class="text-center ml-5 mr-5" v-model="alert" color="rgba(255, 0, 0, 0.4);" tile>
        <code>{{available}} available stocks left.</code>
      </v-alert>
      <!-- alert for quantity is 0 -->
      <v-alert class="text-center ml-5 mr-5" v-model="alert0" color="rgba(255, 0, 0, 0.4);" tile>
        <code>Quantity should not be 0.</code>
      </v-alert>

      <v-spacer></v-spacer>
      <v-row class="pl-2 pr-2">
        <v-col>
          <v-btn block color="secondary" @click="btnCancel" dark>Cancel</v-btn>
        </v-col>
        <v-col v-if="!inCart">
          <v-btn block color="red" @click="btnAddtoCart" :disabled="alert || alert0"><b>Add to Cart</b></v-btn>
        </v-col>
        <v-col v-if="inCart">
          <v-btn block color="green" @click="btnSave" dark>Save</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<style scoped>
.alert {
  border: solid 1px;
  height: 50px !important;
}
.fn-20 {
  font-size: 20px !important;
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
/* eslint-disable */
export default {
  name: "quantity",
  props: {
    item: Object,
    inCart: Boolean
  },
  data() {
    return {
      alert: true,
      alert0: false,
      quantity: 1,
      url: null,
      available: 0,
      rules: {
        required: value => !!value || "Required.",
        max: value =>
          value <= this.available || "Quantity left is " + this.available
      }
    };
  },
  updated() {
    if (this.quantity > this.available) {
      this.alert = true;
    } else if (this.quantity == 0) {
      this.alert0 = true;
    } else {
      this.alert = false;
      this.alert0 = false;
    }
  },
  mounted() {
    this.available = this.item.quantity;
    this.url = "https://gmbuck.s3.amazonaws.com/gm/" + this.item.src;
  },
  methods: {
    btnIncClick() {
      if (parseInt(this.quantity) < this.available) {
        this.quantity = parseInt(this.quantity) + 1;
        this.alert = true;
      }
    },
    btnDecClick() {
      if (parseInt(this.quantity) > 1) {
        this.quantity = parseInt(this.quantity) - 1;
      }
    },
    btnCancel() {
      this.$emit("btnCancel");
      this.quantity = null;
    },
    btnAddtoCart() {
      this.$emit("btnAddtoCart", this.quantity);
      this.quantity = null;
    },
    btnSave() {
      this.$emit("btnSave", this.quantity);
      //this.quantity = null;
    }
  }
};
</script>

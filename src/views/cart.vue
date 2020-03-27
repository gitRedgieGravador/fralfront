<template>
  <div id="card">
    <div class="pa-2">
      <div v-if="!isCheckout">
        <div v-for="(each, i) in itemsCart" :key="i" class="pt-2 pb-2">
          <CartCard :item="each" @btnEdit="handleEdit"></CartCard>
        </div>
      </div>
      <br>
      <div v-if="isCheckout">
        <!-- receipt  -->
        <v-card outlined>
          <Checkout :items="itemsCart"></Checkout>
        </v-card>
        <br>
        <!-- Total area -->

        <v-card outlined>
          <v-row class="text-center">
            <v-col>
              <h3>Total:</h3>
            </v-col>
            <v-col>
              <h3>{{new Intl.NumberFormat().format(total)}}</h3>
            </v-col>
          </v-row>
        </v-card>
        <br>

        <!-- Confirm -->
        <v-card outlined class="pa-2">
          <h3>Delivery Infomation</h3>
          <v-row>
            <v-col cols="10">
              <h5>Address: Basak Lapu lapu city</h5>
              <h5>Mobile: 09123456789</h5>
              <h5>Payable: {{new Intl.NumberFormat().format(total)}}</h5>
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

        <!-- Order Button -->
        <v-btn dark id="btnOrder" color="red" block :disabled="!confirm">
          <b>Order Now</b>
        </v-btn>
      </div>

      <v-btn block v-if="!isCheckout" dark id="btnOrder" color="red" @click="isCheckout = true">
        <b>Check Out</b>
      </v-btn>
      <!-- dialog for quantity starts here -->

      <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="290">
          <QuanCard
            :inCart="true"
            :item="itemsCart[1]"
            @btnCancel="dialog = false"
            @btnAddtoCart="dialog = false"
          ></QuanCard>
        </v-dialog>
      </v-row>
      <!-- dialog for quantity ends -->
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
.sticky {
  position: fixed;
  z-index: 8;
  width: 100%;
  margin-left: -4.5%;
  margin-top: -2%;
}
</style>

<script>
/* eslint-disable */
import CartCard from "../components/redgie/CartCard.vue";
import QuanCard from "../components/redgie/quantity";
import Checkout from "../components/redgie/checkout";
export default {
  name: "card",
  components: {
    CartCard,
    QuanCard,
    Checkout
  },
  data() {
    return {
      isCheckout: false,
      confirm: false,
      total: 10000.0,
      pathName: "",
      dialog: false,
      editId: null,
      itemsCart: [
        {
          id: 1,
          src: "~@/assets/yellow.jpg",
          name: "Baygon",
          price: 150.0,
          category: "#disinfectant",
          quantity: 2
        },
        {
          id: 2,
          src: "~@/assets/yellow.jpg",
          name: "Baygon",
          price: 150.0,
          category: "#disinfectant",
          quantity: 2
        },
        {
          id: 3,
          src: "~@/assets/yellow.jpg",
          name: "Baygon",
          price: 150.0,
          category: "#disinfectant",
          quantity: 2
        },
        {
          id: 4,
          src: "~@/assets/yellow.jpg",
          name: "Baygon",
          price: 150.0,
          category: "#disinfectant",
          quantity: 2
        },
        {
          id: 5,
          src: "~@/assets/yellow.jpg",
          name: "Baygon",
          price: 150.0,
          category: "#disinfectant",
          quantity: 2
        },
        {
          id: 6,
          src: "~@/assets/yellow.jpg",
          name: "Baygon",
          price: 150.0,
          category: "#disinfectant",
          quantity: 2
        }
      ]
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
    this.watchRoute();
  },
  watch: {
    $route: "watchRoute"
  },
  methods: {
    handleScroll() {
      var scrollVal = window.pageYOffset;
      if (scrollVal > 150) {
        //
      } else {
        //
      }
    },
    watchRoute() {
      //console.log(this.$route.name);
    },
    handleEdit(id) {
      this.editId = id;
      this.dialog = true;
    }
  }
};
</script>
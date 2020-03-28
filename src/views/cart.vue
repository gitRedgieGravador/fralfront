<template>
  <div id="card">
    <div class="pa-2">
      <div v-if="!isCheckout">
        <div v-for="(each, i) in itemsCart" :key="i" class="pt-2 pb-2">
          <CartCard :item="each" @btnEdit="handleEdit"></CartCard>
        </div>
      </div>

      <div v-if="isCheckout">
        <!-- receipt  -->
        <div>
          <v-card class="text-center pt-2" outlined>
            <h6>Lapu-lapu Chapter General Merchandise</h6>
            <p>
              Contact: 09123456789
              <br>Email: llcgeneralmerchandise@gmail.com
              <br>Address: ML Quezon National Highway, Mustang Pusok, Lapu Lapu city
            </p>
          </v-card>
        </div>
        <br>
        <v-card outlined>
          <Checkout :items="itemsCart"></Checkout>
        </v-card>

        <!-- Total area -->

        <v-card outlined>
          <v-row class="text-center">
            <v-col>
              <h5>Total:</h5>
            </v-col>
            <v-col>
              <h5>{{new Intl.NumberFormat().format(total)}}</h5>
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
                <v-switch v-model="confirm" class="ma-2" @click="handleConfirm"></v-switch>
              </v-col>
              <v-col>
                <h3 id="conf-tx">Confirm</h3>
              </v-col>
            </v-row>
          </v-footer>
        </v-card>

        <!-- Order Button v-if="isCheckout" -->
        <div v-if="confirm">
          <br>
          <v-btn block id="btnOrder" color="red" :disabled="!confirm">
            <b>Order Now</b>
          </v-btn>
        </div>
      </div>
      <br>
      <div v-if="!isCheckout">
        <v-btn block dark id="btnOrder" color="red" @click="handleCheckout">
          <b>Check Out</b>
        </v-btn>
      </div>

      <!-- dialog for quantity starts here -->

      <v-row justify="center" v-if="dialog">
        <v-dialog v-model="dialog" persistent width="290">
          <QuanCard
            :inCart="true"
            :item="editItem"
            @btnCancel="handleCancel"
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
p {
  font-size: 9px;
}
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
      editItem: null,
      itemsCart: [
        {
          id: 1,
          src: "yellow.jpg",
          name: "Baygon",
          price: 150.0,
          category: "#disinfectant",
          quantity: 2,
          label: "pcs"
        },
        {
          id: 2,
          src: "blackshirts.jpg",
          name: "Plain t-shirt",
          price: 100.0,
          category: "#shirt",
          quantity: 2,
          label: "pcs"
        },
        {
          id: 3,
          src: "timexIndigo.png",
          name: "Timex Indigo",
          price: 2500.0,
          category: "#watch",
          quantity: 2,
          label: "pcs"
        },
        {
          id: 4,
          src: "photomagicmug.png",
          name: "Photo Mug",
          price: 150.0,
          category: "#mug",
          quantity: 2,
          label: "pcs"
        },
        {
          id: 5,
          src: "30mBlueCat5Rj45.png",
          name: "30m Cat5 RJ45",
          price: 450.0,
          category: "#rj45 cable",
          quantity: 2,
          label: "meter"
        },
        {
          id: 6,
          src: "shoes.jpg",
          name: "Black Tiktak",
          price: 250.0,
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
    handleEdit(item) {
      this.editItem = item;
      this.dialog = true;
    },
    handleCancel() {
      this.dialog = false;
      this.editItem = null;
    },
    handleCheckout() {
      this.isCheckout = true;
      window.scrollTo(0, 0);
    },
    handleConfirm() {
      this.confirm = true;
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }
  }
};
</script>
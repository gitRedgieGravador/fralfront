<template>
  <div>
    <div v-if="!mobile">
      <v-app>
        <v-app-bar app color="rgb(0, 0, 153)" dark>
          <v-spacer></v-spacer>
          <v-btn text>
            <v-icon>mdi-login</v-icon>
            <span class="mr-2">Log in</span>
          </v-btn>
          <v-btn text>
            <span class="mr-2">Log out</span>
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </v-app-bar>
        <br>
        <br>
        <br>
        <div class="pl-2 pr-2">
          <router-view></router-view>
        </div>
      </v-app>
    </div>

    <div v-else>
      <v-card>
        <div class="sticky">
          <v-toolbar class="main-head myfont" v-if="!search">
            <h2 v-if="!cartScroll">Application name</h2>
            <h2 v-if="cartScroll">Payable: Php {{payable}}</h2>
            <!-- <h2 v-if="$route.path == '/cart' && scrolled">Total</h2> -->
            <v-spacer></v-spacer>
            <img src="~@/assets/logo.png" class="logo-mobile">
          </v-toolbar>
          <v-toolbar dense class="toolbar" v-if="search">
            <v-text-field hide-details placeholder="search"></v-text-field>
            <v-btn icon>
              <v-icon>mdi mdi-magnify</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
        <v-app>
          <div class="pl-2 pr-2 x-fixed">
            <!-- content here -->
            <br>
            <br>
            <br>
            <router-view></router-view>

            <v-footer absolute class="fixed">
              <hr>
              <v-col class="text-center" @click="toogle('home')">
                <v-icon>mdi mdi-home</v-icon>
              </v-col>
              <v-col class="text-center br-left" @click="toogle('cart')">
                <v-icon>mdi mdi-cart-outline</v-icon>
              </v-col>
              <v-col class="text-center br-left" @click="toogle('account')">
                <v-icon>mdi mdi-account-outline</v-icon>
              </v-col>
              <v-col
                v-if="this.$route.path == '/'"
                class="text-center br-left"
                @click="toogle('search')"
              >
                <v-icon>mdi mdi-magnify</v-icon>
              </v-col>
            </v-footer>
          </div>
        </v-app>
      </v-card>
    </div>
  </div>
</template>
<style scoped>
.logo-mobile {
  margin-top: 5%;
  border-radius: 50%;
  border: 1px solid wheat;
  width: 50px;
  height: 50px;
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.main-head {
  background: transparent !important;
  height: 70px !important;
}

.br-left {
  border-left: solid #d9d9d9 1px;
}
.tl-header {
  position: relative;
  margin-top: 1%;
}

.fixed {
  position: fixed;
}

.myfont {
  font-family:Arial, Helvetica, sans-serif;
}
router-view {
  z-index: 0;
}
@media only screen and (max-width: 600px) {
  .x-fixed {
    overflow-x: hidden;
  }
}


.icon-footer {
  height: 80px !important;
}

.sticky {
  position: fixed;
  z-index: 10;
  background-color: white;
  width: 100%;
}

.toolbar {
  width: 100%;
}
</style>
<script>
//import HelloWorld from './components/HelloWorld';
/* eslint-disable */
export default {
  name: "App",

  components: {
    //HelloWorld,
  },

  data() {
    return {
      mobile: false,
      search: false,
      cartScroll: false,
      payable: 0
    };
  },
  created() {
    window.addEventListener("resize", this.Handler);
    this.Handler();
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  destroyed() {
    window.removeEventListener("resize", this.Handler);
  },
  methods: {
    Handler() {
      if (window.innerWidth < 700) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    fetchData() {
      var name = this.$route.name
      this.payable = this.$route.params.price
      if(name == 'cart2'){
        this.cartScroll = true;

      }else{
        this.cartScroll = false;
      }
    },
    alert() {
      alert("You click it.");
    },
    toogle(btn) {
      // btn.preventDefault();
      //alert(btn)
      if (btn == "home" && this.$route.path != "/") {
        this.$router.push({ name: "admin" });
        this.search = false;
      } else if (btn == "cart" && this.$route.path != "/cart") {
        this.$router.push({ name: "cart" });
        this.search = false;
      } else if (btn == "account" && this.$route.path != "/account") {
        this.$router.push({ name: "account" });
        this.search = false;
      } else if (btn == "search" && this.$route.path == "/") {
        this.search = true;
      }
    }
  }
};
</script>
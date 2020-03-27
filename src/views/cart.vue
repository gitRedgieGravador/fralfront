<template>
  <div id="card">
    <div class="pa-2">
      <div class="pa-3">
        <h3>Total payable: Php {{total}}</h3>
      </div>
      <div v-for="(each, i) in 5" :key="i" class="pt-2 pb-2">
        <CartCard></CartCard>
      </div>
      <br>
      <v-card outlined class="pa-2">
        <h3>Delivery Infomation</h3>
        <v-row>
          <v-col cols="10">
            <h5>Address: {{ contact_info.address }}</h5>
            <h5>Mobile: {{ contact_info.number }}</h5>
          </v-col>
          <v-col>
            <v-icon @click="edit_contact">mdi mdi-table-edit</v-icon>
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
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card class="dialog_card">
        <v-card-title class="title mb-4">Contact Information</v-card-title>
        <v-text-field
          label="Address"
          outlined
          v-model="contact_info.address"
          required
        >{{contact_info.address}}</v-text-field>
        <v-text-field
          label="Cellphone No."
          outlined
          v-model="contact_info.number"
          required
        >{{contact_info.number}}</v-text-field>
        <v-card-actions>
          <v-row>
            <v-col cols="6">
              <v-btn @click="dialog = false" block outlined color="red" class="action">
                <v-icon>mdi mdi-window-close</v-icon>Cancel
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn @click="dialog = false" block outlined color="success" class="action">
                <v-icon>mdi mdi-check</v-icon>Save
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
.dialog_card {
  padding: 15px;
}
</style>

<script>
/* eslint-disable */
import CartCard from "../components/redgie/CartCard.vue";
export default {
  name: "card",
  components: {
    CartCard
  },
  data() {
    return {
      dialog: false,
      confirm: false,
      total: 10000.0,
      contact_info: {
        address: "Basak Lapu lapu city",
        number: "09123456789"
      }
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      var scrollVal = window.pageYOffset;
      if (scrollVal > 150) {
        this.$router.push({ path: "/cart/" + this.total + "/" + scrollVal });
      }
    },
    edit_contact() {
      this.dialog = true;
    }
  }
};
</script>
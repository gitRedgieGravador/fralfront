<template>
  <div>
    <div>
      <v-row class="rm">
        <div v-for="(each, i) in 6" :key="i" class="center">
          <div class="ma-3">
            <Card @btnAddCart="askForQuan" @btnDetails="showDetails"></Card>
          </div>
        </div>
      </v-row>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">RACE Shoes</v-card-title>
            <v-card-title class="headline">Quantity: {{quantity}}</v-card-title>
            <v-row class="text-center">
              <v-col>
                <v-btn text class="btnInc" @click="btnIncClick">+</v-btn>
              </v-col>
              <v-col>
                <v-text-field class="btnInc" type="number" v-model="quantity" hide-details placeholder="quantity"></v-text-field>
              </v-col>
              <v-col>
                <v-btn text class="btnInc" @click="btnDecClick">-</v-btn>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-row>
                <v-col>
                  <v-btn block color="green darken-1" text @click="dialog = false">Cancel</v-btn>
                </v-col>
                <v-col>
                  <v-btn block color="green darken-1" text @click="dialog = false">Add to Cart</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <v-row>
        <v-dialog v-model="dialogDetails" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Details</v-card-title>
            <v-card-text>details apears here.</v-card-text>
            <v-spacer></v-spacer>
            <v-row>
              <v-btn block color="secondary darken-1" @click="dialogDetails = false">Back</v-btn>
            </v-row>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>
<style>
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
</style>
<script>
/* eslint-disable */
import helper from "../helper/axios";
import Card from "../components/redgie/card";
export default {
  name: "customer",
  components: {
    Card
  },
  data() {
    return {
      dialogDetails: false,
      quantity: 1,
      dialog: false,
      admin: "",
      students: [],
      search: "",
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id"
        },
        { text: "Name", value: "name" },
        { text: "Year", value: "level" }
      ]
    };
  },

  mounted() {
    // var url =
    //   "https://qofbe721ad.execute-api.us-east-1.amazonaws.com/dev/upload";
    // this.axios.get(url).then(resp => {
    //   this.admin = resp.data.name;
    //   console.log(resp);
    // });
  },
  methods: {
    getStudents() {
      helper.getStudents().then(resp => {
        this.students = resp.data;
        console.log("sila: ", this.students);
      });
    },
    askForQuan() {
      this.dialog = true;
    },
    btnIncClick() {
      this.quantity = parseInt(this.quantity) + 1;
    },
    btnDecClick() {
      if (parseInt(this.quantity) > 2) {
        this.quantity = parseInt(this.quantity) - 1;
      }
    },
    showDetails() {
      this.dialogDetails = true;
    }
  }
};
</script>
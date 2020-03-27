<template>
  <div>
    <div>
      <!-- items -->
      <v-row class="rm">
        <div v-for="(each, i) in 6" :key="i" class="center">
          <div class="ma-3">
            <Card @btnAddCart="askForQuan" @btnDetails="showDetails"></Card>
          </div>
        </div>
      </v-row>

      <!-- dialog for quantity starts here -->
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="290">
          <v-card>
            <v-row class="ml-3">
              <v-col cols="10" class="bright nopadding">
                <v-row>
                  <v-col class="nopadding">
                    <img class="my-img" height="100" width="100" src="~@/assets/yellow.jpg">
                  </v-col>
                  <v-col class="cd-details">
                    <h3>RACE Yellow</h3>
                    <h5>1500</h5>
                    <h3>
                      <code>{{quantity}}</code> pairs
                    </h3>
                    <h5>#shoes #male</h5>
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
                <v-btn block color="secondary darken-1" @click="dialog = false">Cancel</v-btn>
              </v-col>
              <v-col>
                <v-btn block color="red darken-1" @click="dialog = false">Add to Cart</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- dialog for quantity ends -->
      <!-- dialog for details start -->
      <v-row>
        <v-dialog v-model="dialogDetails" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Details</v-card-title>
            <v-card-text>details apears here.</v-card-text>
            <v-spacer></v-spacer>
            <v-row>
              <v-btn block color="primary darken-1" @click="dialogDetails = false">Back</v-btn>
            </v-row>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- dialog for details ends -->
    </div>
    <br>
    <br>
    <br>
  </div>
</template>
<style>
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
      dialog: false
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
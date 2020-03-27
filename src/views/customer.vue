<template>
  <div>
    <div>
      <!-- items -->
      <v-row class="rm">
        <div v-for="(each, i) in items" :key="i" class="center">
          <div class="ma-3">
            <Card @btnAddCart="askForQuan" @btnDetails="showDetails"></Card>
          </div>
        </div>
      </v-row>

      <!-- dialog for quantity starts here -->
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="290">
          <QuanCard :inCart="false" :item="items[1]" @btnCancel="dialog = false" @btnAddtoCart="dialog = false"></QuanCard>
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
import QuanCard from "../components/redgie/quantity";
export default {
  name: "customer",
  components: {
    Card,
    QuanCard
  },
  data() {
    return {
      dialogDetails: false,
      quantity: 1,
      dialog: false,
      items: [
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
    
    showDetails() {
      this.dialogDetails = true;
    }
  }
};
</script>
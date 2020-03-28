<template>
  <div>
    <div>
      <!-- items -->
      <v-row justify="center">
        <div v-for="(each, i) in items" :key="i">
          <div class="ma-3"> 
            <Card :item="each" @btnAddCart="askForQuan" @btnDetails="showDetails"></Card>
          </div>
        </div>
      </v-row>

      <!-- dialog for quantity starts here -->
      <v-row justify="center" v-if="dialog">
        <v-dialog v-model="dialog" persistent width="290">
          <QuanCard :inCart="false" :item="indexItem" @btnCancel="QuanCancel" @btnAddtoCart="dialog = false"></QuanCard>
        </v-dialog>
      </v-row>
      <!-- dialog for quantity ends -->
      <!-- dialog for details start -->
      <v-row v-if="dialogDetails">
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
/* @media only screen and (max-width: 1200px) {
  .rm {
    padding-left: calc(100% - 332px);
  }
} */
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
      indexItem:null,
      items: [
        {
          id: 1,
          src: "yellow.jpg",
          name: "Baygon",
          price: 150.0,
          category: "#disinfectant",
          quantity: 100,
          label:"pcs"
        },
        {
          id: 2,
          src: "blackshirts.jpg",
          name: "Plain t-shirt",
          price: 100.0,
          category: "#shirt",
          quantity: 45,
          label:"pcs"
        },
        {
          id: 3,
          src: "timexIndigo.png",
          name: "Timex Indigo",
          price: 2500.0,
          category: "#watch",
          quantity: 30,
          label:"pcs"
        },
        {
          id: 4,
          src: "photomagicmug.png",
          name: "Photo Mug",
          price: 150.0,
          category: "#mug",
          quantity: 30,
          label:"pcs"
        },
        {
          id: 5,
          src: "30mBlueCat5Rj45.png",
          name: "30m Cat5 RJ45",
          price: 450.0,
          category: "#rj45 cable",
          quantity: 250,
          label:"meter"
        },
        {
          id: 6,
          src: "shoes.jpg",
          name: "Black Tiktak",
          price: 250.0,
          category: "#disinfectant",
          quantity: 20
        }
      ]
    };
  },

  mounted() {
    console.log(window.innerWidth);
  },
  methods: {
    getStudents() {
      helper.getStudents().then(resp => {
        this.students = resp.data;
        console.log("sila: ", this.students);
      });
    },
    askForQuan(item) {
      this.indexItem = item;
      this.dialog = true;
    },
    
    showDetails(id) {
      this.dialogDetails = true;
    },
    QuanCancel(){
      this.dialogDetails = false;
      this.dialog = false;
      this.indexItem = null;
    }
  }
};
</script>
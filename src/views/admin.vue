<template>
  <div>
    <div>
      <v-row class="rm">
        <div v-for="(each, i) in 6" :key="i" class="center">
          <div class="ma-3">
            <Card></Card>
            
          </div>
        </div>
      </v-row>
    </div><br><br><br>
  </div>
</template>
<style>
.rm {
  padding-left: calc(100% - 332px);
}

.center {
  display: flex;
}
</style>
<script>
/* eslint-disable */
import helper from "../helper/axios";
import Card from "../components/redgie/card";
export default {
  name: "admin",
  components: {
    Card
  },
  data() {
    return {
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
    }
  }
};
</script>
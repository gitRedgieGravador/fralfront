<template>
  <div>
    <h1>Admin: {{admin}}</h1>

    <v-btn id="btnGetStudents" class="btn" color="success" @click="getStudents()">Load</v-btn>

    <v-card>
      <v-card-title>
        Students
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="students" :search="search"></v-data-table>
    </v-card>
  </div>
</template>
<script>
/* eslint-disable */
import helper from "../helper/axios";
export default {
  name: "admin",
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
    var url =
      "https://qofbe721ad.execute-api.us-east-1.amazonaws.com/dev/upload";

    this.axios.get(url).then(resp => {
      this.admin = resp.data.name;
      console.log(resp);
    });
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


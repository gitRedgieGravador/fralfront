<template>
  <div>
    <h1>admin: {{admin}}</h1>

    <v-btn id="btnGetStudents" class="btn" @click="getStudents()">Load</v-btn>

    <v-card>
      <v-card-title>
        Students
        <v-spacer></v-spacer>
        <!-- <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>-->
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
      students: [
        { id: 1, name: "Redgie Gravador", level: "2nd Yr" },
        { id: 2, name: "Jessa Mae Yosores", level: "2nd Yr" },
        { id: 3, name: "Nicole Genson", level: "2nd Yr" },
        { id: 4, name: "Jovelyn Yosores", level: "2nd Yr" }
      ],
      search: "",
      headers: [
        {
          text: "ID"
        },
        { text: "Name", value: "calories" },
        { text: "Year", value: "fat" }
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


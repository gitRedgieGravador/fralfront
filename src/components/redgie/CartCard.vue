<template>
  <div id="CartCard">

    <v-card outlined>
        <v-row>
        <v-col cols="10" class="bright nopadding">
            <v-row>
            <v-col class="nopadding text-left">
                <img class="my-img" height="100" width="100" :src="url">
            </v-col>
            <v-col class="cd-details text-left">
                <h3>{{item.name}}</h3>
                <h5>{{item.price}}</h5>
                <h5>{{item.quantity}} pairs</h5>
                <h5>{{item.category}}</h5>
            </v-col>
            </v-row>
        </v-col>
        <v-col class="ml-2">
            <v-row>
            <v-icon color="green" @click="btnEdit(item)">mdi mdi-table-edit</v-icon>
            </v-row>
            <br>
            <v-row>
            <v-icon color="red" @click="btnDelete(item.id)">mdi mdi-delete</v-icon>
            </v-row>
        </v-col>
        </v-row>
    </v-card>
  </div>
</template>
<style scoped>
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
</style>

<script>
/* eslint-disable */

export default {
  name: "CartCard",
  props:{
    item: Object
  },
  component: {
    //card
  },
  data() {
    return {
      url:""
    };
  },
  mounted(){
    this.url = 'https://gmbuck.s3.amazonaws.com/gm/' + this.item.src;
  },
  methods:{
    btnEdit(item){
      this.$emit("btnEdit", item);
    },
    btnDelete(id){
      this.$emit("btnDelete", id);
    }
  }
};
</script>
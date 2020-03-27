<template>
  <div>
    <div v-if="data != null">
      <center>
        <v-card class="d-inline-block mx-auto" width="150" height="230">
          <v-container>
            <v-row>
              <v-img height="120" width="130" :src="url" class="item"></v-img>
            </v-row>
            <v-row class="nopadding">
              <v-col class="nopadding">
                <p class="name">{{data.name}}</p>
              </v-col >
              <v-col cols="5" class="nopadding">
                <p class="price">{{data.price}}</p>
              </v-col>
            </v-row>

            <v-row class="footer">
              <v-col cols="6">
                <v-btn block outlined color="success" class="action" @click="btnAddCart(data.id)">
                  <v-icon>mdi mdi-cart</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn block outlined color="primary" class="action" @click="btnDetails(data.id)">
                  <v-icon>mdi mdi-information-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </center>
    </div>
  </div>
</template>
<style scoped>
.nopadding {
  padding: 0px !important;
}
.name {
  font-size: 12px;
  position: relative;
  margin: 0px !important;
}
.footer {
  bottom: 0px;
  background: transparent !important;
  z-index: 1;
  height: 45px;
}
.item {
  position: relative;
}

.price {
  position: sticky;
  margin-bottom: -12px;
  margin-right: 30%;
  z-index: 3;
  font-size: 12px;
}
.action {
  font-size: 8px;
  width: 60px !important;
}
</style>

<script>
/* eslint-disable */

export default {
  name: "card",
  props: {
    item: Object
  },
  data(){
    return{
      url:"",
      data: null
    }
  },
  mounted(){
    this.url = 'https://gmbuck.s3.amazonaws.com/gm/' + this.item.src;
    this.data = this.item;
  },
  component: {
    //card
  },
  methods: {
    btnAddCart(event) {
      this.$emit("btnAddCart", this.items.id);
    },
    btnDetails(event) {
      this.$emit("btnDetails", this.items.id);
    }
  }
};
</script>
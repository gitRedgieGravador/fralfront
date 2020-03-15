<template>
  <div>
    
    <h1>admin: {{admin}}</h1>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "admin",
  data() {
    return {
      admin: ""
    };
  },

  mounted() {
    var url = "https://qofbe721ad.execute-api.us-east-1.amazonaws.com/dev/upload";
    this.axios
      .get(url)
      .then(resp => {
          this.admin = resp.data.name
        console.log(resp);
      });
  }
};
</script>


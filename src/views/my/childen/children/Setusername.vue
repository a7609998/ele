<template>
  <div class="setusername">
    <Header :title="title"></Header>
  </div>
</template>
<script>
import Header from "../../../../components/header";
export default {
  name: "Setusername",
  components: {
    Header
  },
  data() {
    return {
      title: "修改用户名"
    };
  }
};
</script>
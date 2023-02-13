<template>
  <div>
    <MainHeader />
    <ListRoom />
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from "@/components/commons/MainFooter.vue";
import MainHeader from "@/components/commons/MainHeader.vue";
import ListRoom from "@/components/ListRoom.vue";

export default {
  name: "RoomView",
  components: {
    MainHeader,
    MainFooter,
    ListRoom,
  },
};
</script>

<style src="./style.scss" lang="scss" />

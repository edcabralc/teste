<template>
  <div>
    <MainHeader />
    <ListRoom />
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from "@/components/commons/MainFooter";
import MainHeader from "@/components/commons/MainHeader";
import ListRoom from "@/components/ListRoom";

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

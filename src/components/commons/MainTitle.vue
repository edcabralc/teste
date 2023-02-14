<template>
  <h2 class="title">
    <slot>
      {{ title }}
    </slot>
  </h2>
</template>

<script>
export default {
  name: "MainTitle",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: #242222;
  font-weight: 700;
  padding: 28px 0;
  margin: 38px 0;
  position: relative;
  text-align: center;
}

.title::after {
  content: "";
  width: 268px;
  height: 12px;
  position: absolute;
  height: 5px;
  background-color: #b9ad81;
  bottom: 0;
}
</style>

<template>
  <section class="cover-background">
    <h1 class="hero-title">{{ title }}</h1>
  </section>
</template>
<script>
export default {
  name: "HeroBanner",
  props: {
    title: String,
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.cover-background {
  padding: 164px;
  width: 100%;
  height: 634px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  background-size: cover;
}
</style>

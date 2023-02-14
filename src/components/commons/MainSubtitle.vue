<template>
  <h3 class="subtitle">
    <slot>
      {{ text }}
    </slot>
  </h3>
</template>

<script>
export default {
  name: "MainSubtitle",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.subtitle {
  font-size: 32px;
  font-weight: 700;
  color: #242222;
}
</style>

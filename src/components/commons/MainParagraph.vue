<template>
  <p class="paragraph">
    <slot>
      {{ text }}
    </slot>
  </p>
</template>

<script>
export default {
  name: "MainParagraph",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.paragraph {
  font-size: 24px;
  color: #686b68;
  line-height: 36px;
  font-weight: 400px;
  text-align: left;
}
</style>

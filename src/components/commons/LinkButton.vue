<template>
  <router-link class="btn" :to="href">
    <slot>{{ title }}</slot>
  </router-link>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    title: String,
    href: String,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
/* Buttons */
.btn {
  width: 288px;
  height: auto;
  border-radius: 9px;
  border: none;
  box-shadow: none;
  font-size: 20px;
  padding: 12px 22px;
  color: #fff;
  background-color: #558e60;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  text-align: center;
}

.btn:hover {
  background-color: #558e60;
  color: #fff;
  opacity: 0.5;
  transition: ease 0.2s;
  cursor: pointer;
}
/* end Buttons */
</style>

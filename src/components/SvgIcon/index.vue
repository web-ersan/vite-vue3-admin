<template>
  <svg :class="svgClass" aria-hidden="true" :style="{ width, height }">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  //svg宽度
  width: {
    type: String,
    default: "14px",
  },
  //svg高度
  height: {
    type: String,
    default: "14px",
  },
});
const iconName = computed(() => `#icon-${props.iconClass}`);
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`;
  }
  return "svg-icon";
});
</script>

<style scoped lang="less"></style>

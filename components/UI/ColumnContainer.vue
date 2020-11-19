<template>
  <div class="column-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ColumnContainer",
};
</script>

<style lang="scss" scoped>
.column-container {
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

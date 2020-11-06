<template>
  <div>
    <el-button
      @click="handleClick"
    >
      <span
        v-if="$slots.default"
      >
        <slot />
      </span>
    </el-button>
  </div>
</template>

<script>
export default {
  name: "NsButton",
  props: {
    text: String
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
}
</script>

<style scoped>

</style>

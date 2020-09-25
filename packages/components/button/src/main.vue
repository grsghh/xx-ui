<template>
  <div>
    <button
      @click="handleClick"
    >
      <span
        v-if="$slots.default"
      ><slot></slot></span>
    </button>
  </div>
</template>

<script>
  export default {
    name: "NsButton",
    props: {
      text: {
        default: '',
        Type: String
      }
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

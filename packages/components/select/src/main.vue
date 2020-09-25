<template>
  <div>
    <select name="" id=""
      :value="nativeSelectValue"
      @change="handleChange"
      ref="select"
    >
      <option
        v-for="(option, index) in list"
        :value="option.value">{{option.label}}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: "NsSelect",
    props: {
      list: {
        require: true,
        type: Array
      },
      value: {
        require: true,
        type: String
      }
    },
    computed: {
      nativeSelectValue() {
        return this.value === null || this.value === undefined ? '' : String(this.value);
      }
    },
    methods: {
      handleChange(event) {
        if (event.target.value === this.nativeSelectValue) return;
        this.$emit('input', event.target.value);
        this.$emit('change', event.target.value);
        this.$nextTick(this.setNativeSelectValue);
      },
      setNativeSelectValue() {
        const select = this.getSelect();
        if (!select) return;
        if (select.value === this.nativeSelectValue) return;
        select.value = this.nativeSelectValue;
      },
      getSelect() {
        return this.$refs.select;
      }
    }
  }
</script>

<style scoped>

</style>

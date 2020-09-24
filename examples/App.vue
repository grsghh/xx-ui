<template>
  <div id="app">
    <xx-button
      @click="handleClick"
    >12232323233</xx-button>
    <xx-select
      :list="list"
      v-model="selectVal"
      @change="handleChange"
    ></xx-select>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      selectVal:'',
      list: [
        {
          label: '一',
          value:1
        },
        {
          label: '二',
          value:2
        }
      ]
    }
  },
  methods: {
    handleClick(event) {
      alert(1111)
      console.log(event);
    },
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

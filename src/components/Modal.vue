<template>
  <Row>
    <div class="wrapper">
      <label>key</label>
      <Input v-model="key" @on-change="keyChange"/>
    </div>
    <div class="wrapper">
      <label>value</label>
      <Input v-model="value" @on-change="valueChange"/>
    </div>
    <div class="wrapper">
      <label>type</label>
      <Input v-model="type" @on-change="typeChange"/>
    </div>
  </Row>
  <!--<ul>
    <li>
      <label>key</label>
      <span>{{key}}</span>
    </li>
    <li>
      <label>value</label>
      <span>{{value}}</span>
    </li>
    <li>
      <label>type</label>
      <span>{{type}}</span>
    </li>
  </ul>-->

</template>

<script>
  export default {
    name: "Modal",
    data() {
      return {
        key: 'dsf',
        value: 'kk',
        type: 'dfs'
      }
    },
    methods:{
      keyChange:function(){
        var obj = this
        this.$emit('key', obj.key)
      },
      valueChange() {
        var obj = this
        this.$emit('value', obj.value)
      },
      typeChange() {
        var obj = this
        this.$emit('type', obj.type)
      }
    }
  }
</script>

<style scoped>

</style>

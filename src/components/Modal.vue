<template>
  <Row>
    <div class="wrapper">
      <label>key</label>
      <Input v-model="key" disabled  @on-change="keyChange" />
    </div>
    <div class="wrapper">
      <label>value</label>
      <Input v-model="value" disabled @on-change="valueChange"/>
    </div>
    <div class="wrapper">
      <label>type</label>
      <Input v-model="type" disabled @on-change="typeChange"/>
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

      }
    },
    props: {
      key: {
        type: String,
        default: 'SS'
      },
      value: {
        type: String,
        default: 'ss'
      },
      type: {
        type: String,
        default: 'ss'
      },

    },

    methods: {
      keyChange: function () {
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

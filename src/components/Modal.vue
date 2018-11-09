<template>
  <Row>
    <div class="wrapper">
      <label>key</label>
      <Input v-model="key" readonly @on-change="keyChange" size="large" />
    </div>
    <div class="wrapper">
      <label>value</label><br/>
      <Input v-model="value" readonly @on-change="valueChange"  size="large"/>
     <!-- <span>{{value}}</span>-->
    </div>
    <div class="wrapper">
      <label>type</label>
      <Input v-model="type" readonly @on-change="typeChange"  size="large"/>
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
        default: 'ff'
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

<style>
  .ivu-input {
    /*background-color:#515a6e !important;*/
    font-size: 15px;
  }
</style>

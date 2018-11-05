<!--suppress ALL -->
<template>
  <div class="layout">
    <Layout>
      <Header style="top: 0px">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Manage redis server
            </MenuItem>
          </div>
        </Menu>
      </Header>
    </Layout>
    <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></Table>
    <Page :total=total @on-change="change"></Page>
  </div>
</template>
<script>
  import axios from 'axios'
  import 'axios/dist/axios.js'

  export default {
    name: "redis-list",
    data() {
      return {
        columns3: [
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: 'key',
            key: 'name',
            align: 'center'
          },
          {
            title: '操作',
            key: 'actor',
            align: 'center'
          }
        ],
        data1: [
        ],

        total: 2,
        pageSize: 10,
        pageNuw: 1,
      }
    },
    methods: {
      /*getList() {
        axios.post('http://localhost:8087/redis/keys', {"pageNow": 1, "pageSize": this.pageSize}, {emulateJSON: true})
          .then(res => {
            var arr_model = res.data.content.name;
            this.total = res.data.content.total
            for (var i = 0; i < arr_model.length; i++) {
              this.data1.push({
                name: arr_model[i]
              })
            }
          })
      },*/
      change(page) {
        var vm = this
        this.data1=[];
        vm.pageNow = page;
        axios.post('http://localhost:8087/redis/keys', {
          "pageNow": vm.pageNow,
          "pageSize": vm.pageSize
        }, {emulateJSON: true})
          .then(res => {
            var arr_mode = res.data.content.name;
            vm.total = res.data.content.total;
            for (var i = 0; i < arr_mode.length; i++) {
              vm.data1.push({
                name: arr_mode[i],
              })
            }
          })
      },
    },
    created(){
      this.change(1)
    }
  }
</script>

<style scoped>
  .layout-nav {
    width: auto;
    margin: 0 auto;
    margin-right: auto;
    font-size: 1.875em;
  }

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
</style>

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
      <Button @click="handleClearCurrentRow">Clear</Button>
    </div>
</template>
<script>
import axios from 'axios'
import 'axios/dist/axios.js'
    export default {
        name: "redis-list",
      data () {
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
          data1: []
        }

      },
      methods:{
          getList(){
            axios.post('http://localhost:8087/redis/keys', {"pageNow":1,"pageSize":10},{emulateJSON: true})
              .then(function (res) {
                console.log(res.data.content)
                this.data1=res.data.content
              })
          },
        handleClearCurrentRow () {
          this.$refs.currentRowTable.clearCurrentRow();
        }
      },
      created :function () {
        this.getList()
        }
    }
</script>

<style scoped>
  .layout-nav{
    width: auto;
    margin: 0 auto;
    margin-right: auto;
    font-size: 1.875em;
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
</style>

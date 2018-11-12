<!--suppress ALL -->
<template>
  <div class="layout">

    <Layout>
      <Header style="top: 0px">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-nav">
            <MenuItem name="1">
              <Button :size="buttonSize" type="default" icon="ios-add-circle-outline" @click="value3 = true" >add Server</Button>
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-navigate"></Icon>
              Manage redis server
            </MenuItem>
          </div>
        </Menu>
      </Header>
    </Layout>
    <Drawer
      title="add Server"
      v-model="value3"
      width="520"
      :mask-closable="false"
      :styles="styles"
    >
      <Form :model="formData">
        <Row :gutter="32">
          <Col span="16">
            <FormItem label="HOST" label-position="top">
              <Input v-model="formData.host" placeholder="please enter user host" />
            </FormItem>
          </Col>
        </Row>
          <Row :gutter="32">
          <Col span="16">
            <FormItem label="PASSWORLD" label-position="top">
              <Input v-model="formData.password" placeholder="please enter user password" />
            </FormItem>
          </Col>
          </Row>
        <Row :gutter="32">
          <Col span="16">
            <FormItem label="PORT" label-position="top">
              <Input v-model="formData.port" placeholder="please enter user port" />
            </FormItem>
          </Col>
        </Row>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
        <Button type="primary" @click="value3 = false">Submit</Button>
      </div>
    </Drawer>
    <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></Table>
    <Page :total=total @on-change="change"></Page>
  </div>
</template>
<script>
  import axios from 'axios'
  import 'axios/dist/axios.js'
  import Modal from '../components/Modal'


  export default {
    name: "redis-list",
    data: function () {
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
            title: 'type',
            key: 'types',
            align: 'center'
          },
          {
            title: '操作',
            key: 'actor',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.getValueByKey(params.row.name, params.row.types);
                      //this.getValue(params.row.name, params.row.types,this._value);
                    }
                  }
                }, '查看详情')
              ]);
            }
          }
        ],
        data1: [],
        total: 2,
        pageSize: 10,
        pageNuw: 1,
        v1: '',
        v2: '',
        v3: '',
        _value: [],
        buttonSize: 'large',
        value3: false,
        styles: {
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: '53px',
          position: 'static'
        },
        formData: {
          host: '',
          password: '',
          port: ''
        },

      }
    },
    components: {
      Modal
    },
    methods: {
      getValueByKey(key, type) {
        axios.post('http://localhost:8087/redis/getValue?key=' + key + '&type=' + type)
          .then(res => {
            this._value = res.data.content
            var arr_value = this._value
            var result = ''
            for (var i = 0; i < arr_value.length; i++) {
             result += arr_value[i].keyAndValue+' '
            }
           var res= result.replace(/["]/g," ");
            console.log(res)
            this.getValue(key, type, res);
          })
      },

      getValue(key, type, _value) {
        this.$Modal.confirm({
          scrollable: true,
          okText: 'OK',
          cancelText: 'Cancel',
          render: (h) => {
            return h(Modal, {
              props: {
                key: key,
                type: type,
                value: _value
              },
              on: {
                key: (key) => {
                  this.v1 = key
                },
                value: (value) => {
                  this.v2 = value
                },
                type: (type) => {
                  this.v3 = type
                }
              }

            })
          }
        })
        console.log(this.v1)
      },
      change(page) {
        var vm = this
        this.data1 = [];
        vm.pageNow = page;
        axios.post('http://localhost:8087/redis/keys', {
          "pageNow": vm.pageNow,
          "pageSize": vm.pageSize
        }, {emulateJSON: true})
          .then(res => {
            var arr_mode = res.data.content.name;
            vm.total = res.data.content.total;
            /* console.log(arr_mode)*/
            for (var i = 0; i < arr_mode.length; i++) {
              vm.data1.push({
                name: arr_mode[i].name,
                types: arr_mode[i].type
              })
            }
          })
      },
    },
    created() {
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
  .demo-drawer-footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
  }
</style>

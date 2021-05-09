<template>
  <!--  通过设置属性 height 给表格指定高度后，会自动固定表头。当纵向内容过多时可以使用。
  Change Loading Status <Switch v-model="loading"></Switch>切换是否loading
  ref给导出用
  -->
  <div>
    <Button router-link to='/Search' type="primary" size="large">搜索</Button>
    <br>
    <Table border stripe height="600" :columns="columns" :data="tableData" :loading="loading" ref="table"
           @on-row-click="onGroupRowClick"/>
    <Page ref="pagedetails" :total="toatalcount" :current="curentpage+1" :page-size="pagesize"
          @on-change="pagesizechange" @on-page-size-change="pagecountchange"
          show-sizer show-elevator show-total />
  </div>
</template>

<script>
  export default {
    name: 'table-main',
    data () {
      return {
        loading: false,
        curentpage: 0,
        pagesize: 10,
        toatalcount: 110,
        tableData: [],
        columns: [
          {
            title: '名称',
            key: 'configName'
          },
          {
            title: '配置名',
            key: 'paramKey'
          },
          {
            title: '配置值',
            key: 'paramValue'
          },
          {
            title: '描述',
            key: 'paramDesc'
          },
          {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: 150,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  },
                  on: {
                    click: function ($event) {
                      console.log($event.target)
                    }
                  }
                }, 'View'),
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  }
                }, 'Edit')
              ])
            }
          }
        ]
      }
    },
    created () {
      this.$ajax.get('/config/query-all-by-page', {
        params: {
          page: this.curentpage,
          size: this.pagesize
        }
      }).then(res => {
        this.tableData = res.data.content
        this.toatalcount = res.data.totalElements
      }).catch(function (error) {
        console.log(error)
      })
    },
    methods: {
      exportData (type) {
        if (type === 1) {
          this.$refs.table.exportCsv({
            filename: 'The original data'
          })
        } else if (type === 2) {
          this.$refs.table1.exportCsv({
            filename: 'Sorting and filtering data',
            original: false
          })
        } else if (type === 3) {
          this.$refs.table.exportCsv({
            filename: 'Custom data',
            columns: this.columns8.filter((col, index) => index < 4),
            data: this.data7.filter((data, index) => index < 4)
          })
        }
      },
      pagesizechange (curpage) {
        this.currentpage = curpage - 1
        this.querypage()
      },
      pagecountchange (curlpagecount) {
        this.pagesize = curlpagecount
        this.querypage()
      },
      querypage () {
        this.$ajax.get('/config/query-all-by-page', {
          params: {
            page: this.currentpage,
            size: this.pagesize
          }
        }).then(res => {
          this.tableData = res.data.content
          this.toatalcount = res.data.totalElements
        }).catch(function (error) {
          console.log(error)
        })
      },
      onGroupRowClick (data) {
        console.log(data)
      }
    }
  }
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    font-weight: bold;
    text-align: center;
    color: #49ffcc;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>

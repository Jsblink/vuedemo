<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              用户展示
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              注册
            </MenuItem>
            <MenuItem name="3" >
              <Icon type="ios-analytics"></Icon>
              搜索
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              配置项
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div style="min-height: 200px;">
          </div>
        </Card>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &yen; smz</Footer>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: 'Test',
    data () {
      return {
        rangEx: [0, 60],
        resultData: []
      }
    },
    created () {
      alert(this.$myconfig.imageConfig)
      console.log(this.$myconfig.imageConfig)
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <input v-model="inputUserID" placeholder="输入要搜索的userID">
    <button v-on:click="search">搜索</button>
    <p>搜素结果如下</p>
    <p>{{ searchData }}</p>
    <json-viewer :value="searchData" :expand-depth=1 copyable  sort></json-viewer>
  </div>
</template>

<script>
  import JsonViewer from 'vue-json-viewer'
  export default {
    name: 'Search',
    data () {
      return {
        inputUserID: '',
        searchData: {}
      }
    },
    methods: {
      search () {
        var inputUserID = this.inputUserID
        this.searchData = this.$ajax.get('/get-subscriberinfo-by-userid', {
          params: {
            userId: inputUserID
          }
        }).then(res => {
          this.searchData = res.data
          console.log(this.searchData)
        }).catch(function (error) {
          console.log(error)
        })
      }
    },
    components: {
      JsonViewer
    }
  }
</script>

<style scoped>

</style>

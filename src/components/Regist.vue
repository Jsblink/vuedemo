<template>
  <div>
    <!--需要添加:label-width而且值不能太小，否则下面的用户名和密码标签会在input上面而不是左边-->
    <Form ref="formLogin" :model="formBean" :rules="formRules" :label-width="80">
      <FormItem label="用户ID" prop="userId">
        <Input type="text" v-model="formBean.userId" placeholder="用户ID">
          <Icon type="ios-person-outline" slot="prepend"/>
        </Input>
      </FormItem>
      <FormItem label="用户名" prop="userName">
        <Input type="text" v-model="formBean.userName" placeholder="用户名">
          <Icon type="ios-person-outline" slot="append"/>
        </Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input type="password" v-model="formBean.password" placeholder="密码">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem label="手机号码" prop="telnumber">
        <Input type="password" v-model="formBean.telnumber" placeholder="手机号码">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem label="性别">
        <RadioGroup v-model="formBean.radio">
          <Radio label="male">男</Radio>
          <Radio label="female">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="爱好">
        <CheckboxGroup v-model="formBean.checkbox">
          <Checkbox label="Eat"></Checkbox>
          <Checkbox label="Sleep"></Checkbox>
          <Checkbox label="Run"></Checkbox>
          <Checkbox label="Movie"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="备注">
        <Input v-model="formBean.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="上传照片">
        <Upload ref="upload"
                :on-remove="handleRemove"
                :format="['jpg','jpeg','png']"
                :on-format-error="handleFormatError"
                :max-size="2048"
                :on-exceeded-size="handleMaxSize"
                :data="uploadData"
                :before-upload="handleBeforeUpload"
                :action="uploadAction">
          <Button icon="ios-cloud-upload-outline">点击上传图片（可一次上传多张图片）</Button>
          <!-- <div style="padding: 20px 0">
             <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
             <p>Click or drag files here to upload</p>
           </div>-->
        </Upload>
      </FormItem>
      <FormItem >
        <Button type="primary" @click="submit(formBean)">Sign in </Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: 'Regist',
    data () {
      return {
        formBean: {
          userId: '123456@itv',
          userName: '张长',
          password: '123456',
          telnumber: '13645555566',
          radio: 'male',
          checkbox: [],
          textarea: 'regist.vue rgist'
        },
        uploadAction: this.$myconfig.imageConfig.uploadBaseUrl + 'file/uploadFile',
        formRules: {
          username: [
            {required: true, message: '你需要输入用户名'}
          ],
          password: [
            {required: true, message: '你需要输入密码'},
            {type: 'string', min: 6, message: '需要输入大于6位的字符串'}
          ]
        }
      }
    },
    methods: {
      submit: function (name) {
        this.$ajax.post('/save-subscriberinfo', JSON.stringify(name))
      },
      handleFormatError: function (file) {
        alert(this.uploadAction)
        this.$Modal.info({
          title: '文件格式不正确',
          content: '文件 ' + file.name + ' 格式不正确，请上传 jpg、jpeg或 png 格式的图片。'
        })
      },
      handleMaxSize: function (file) {
        this.$Modal.info({
          title: '超出文件大小限制',
          content: '文件 ' + file.name + ' 太大，不能超过 2M。'
        })
      },
      handleRemove: function (file) {
        const fileList = this.$refs.upload.fileList
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
      },
      handleBeforeUpload () {
        console.log(' hi upload')
        console.log(this)
        return true
      }
    }
  }
</script>

<style scoped>

</style>

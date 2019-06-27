<template>
  <section class="my-page-dialog">
    <el-dialog
      :visible.sync="isShowDialog"
      :title="dialogTitle"
      :before-close="DIALOG_CLAOSE_SYNC">
      <el-form
        label-width="120px"
        :model="getFormModel.form"
        ref="myDialogForm">
          <el-form-item
            v-for="(item, index) in getFormModel.list"
            :key="index"
            :prop="item.field"
            :label="item.label"
            :rule="item.rule">
            <template v-if="item.type == 'default'">
              <span>{{getFormModel.form[item.field]}}</span>
            </template>
            <template v-if="item.type == 'input'">
              <el-input
                v-model="getFormModel.form[item.field]"
                :placeholder="'请编辑' + item.label"
                class="my-input__220"/>
            </template>
            <template v-if="item.type == 'textarea'">
              <el-input
                v-model="getFormModel.form[item.field]"
                :placeholder="'请编辑' + item.label"
                type="textarea"
                :rows="item.rows || 3"
                class="my-input__220"/>
            </template>
            <template v-if="item.type == 'switch'">
              <el-switch
                :value="getFormModel.form[item.field]"
                :active-text="item.activeText"
                :inactive-text="item.inactiveText"
                :active-value="item.activeValue"
                :inactive-value="item.inactiveValue">
              </el-switch>
            </template>
            <template v-if="item.type === 'uploadImg'">
              <el-upload
                :action="uploadPath"
                class="avatar-uploader"
                :show-file-list="false"
                name="multipartFile"
                :data = "{}"
                :on-success="e => {return hanleUploadSuccess(e, item)}"
                >
                  <img v-if="getFormModel.form[item.field]"
                    :src="getFormModel.form[item.field]"
                    style="width: 175px; height: 175px;"
                    alt="uploader">
                  <i v-else class="el-icon-plus avatar-uploader-icon" ></i>
              </el-upload>
            </template>
          </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="handleCancel" type="danger">cancel</el-button>
        <el-button @click="handleSubmit" type="primary">submit</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';
  import {Toast} from '@/utils/global'
  import FormModel from '@/utils/form'
  export default {
    name: 'myDialogForm',
    components: {},
    props: {},
    model: {},
    data (){
      return {
        FormModel,
        uploadPath: window.uploadPath
      }
    },
    computed: {
      ...mapState({
        isShowDialog: state => state.isShowDialog,
        dialogTitle: state => state.dialogTitle
      }),
      getFormModel(){
        return FormModel[0]
      },
      getFormData(){
        return this.getFormModel.forms
      }
    },
    watch: {},
    methods: {
      ...mapMutations(['DIALOG_CLAOSE_SYNC']),
      ...mapActions(['DIALOG_CLOSE_ASYNC']),
      /**
       * [hanleUploadSuccess upload上传钩子]
       * @param  {[type]} res  [description]
       * @param  {[type]} item [description]
       * @return {[type]}      [description]
       */
      hanleUploadSuccess(res, item){},
      /**
       * [handleCancel 取消事件]
       * @return {[type]} [description]
       */
      handleCancel() {
        Toast({type: 'info', msg: '操作已取消!'})
        this.DIALOG_CLOSE_ASYNC()
      },
      /**
       * [handleSubmit 提交事件]
       * @return {[type]} [description]
       */
      handleSubmit() {
        this.$refs.myDialogForm.validate(valid => {
          if(valid) {
            Toast({type: 'success', msg: '操作成功!'})
          }else {
            Toast({type: 'error', msg: '操作失败, 请重试!'})
          }
        })
      }
    },
    created(){},
    mixins:[]
  }
</script>

<style scoped lang="scss">
.my-page-dialog {
  .my-input__220 {
    width: 80%;
  }
  .avatar-uploader {
    width: 178px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
}
</style>

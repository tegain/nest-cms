<template>
  <div class="tgn-CreatePost">
    <div class="tgn-CreatePost__topbar">
      <h1 class="tgn-Heading tgn-Heading--h1">
        Create a new post
      </h1>
    </div>
    <AppContent>
      <PostForm />
    </AppContent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppContent from '@/components/layout/Content.vue';
import PostForm from '@/components/posts/PostForm.vue';

@Component({
  components: {
    AppContent,
    PostForm,
  },
})
export default class CreatePost extends Vue {}
</script>

<style lang="scss" scoped>
  /deep/ .el-form-item__content {
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 100%;
    }
  }
</style>

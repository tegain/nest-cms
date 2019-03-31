<template>
  <div v-if="post" class="tgn-EditPost">
    <div class="tgn-EditPost__topbar">
      <h1 class="tgn-Heading tgn-Heading--h1">
        Edit post: {{ post.title }}
      </h1>
    </div>
    <AppContent>
      <PostForm :post="post" :is-editing="true" />
    </AppContent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppContent from '@/components/layout/Content.vue';
import PostForm from '@/components/posts/PostForm.vue';
import { PostInterface } from '@/core/models/PostInterface';
import { HttpService } from '@/core/services/http.service';

@Component({
  components: {
    AppContent,
    PostForm,
  },
})
export default class EditPost extends Vue {
  private post: PostInterface = null;

  async created (): void {
    this.post = await HttpService.get(`/posts/${this.$route.params.id}`);
  }
}
</script>

<style lang="scss" scoped>
  /deep/ .el-form-item__content {
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 100%;
    }
  }
</style>

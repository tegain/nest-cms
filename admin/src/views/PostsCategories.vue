<template>
  <div class="tgn-PostsCategories">
    <h1 class="tgn-Heading">Posts categories</h1>

    <Content>
      <form ref="form" action="#" @submit.prevent="onAddCategory" :rules="rules" :model="form">
        <input type="text" v-model="form.name" placeholder="Name">
        <input type="text" v-model="form.label" placeholder="Label">
        <ElButton
          type="primary"
          @click="onAddCategory"
        >
          Add category
        </ElButton>
      </form>

      <h2>Catégories</h2>

      <ul v-if="tags">
        <li v-for="tag in tags" :key="tag.name" :data-name="tag.name">{{ tag.label }}</li>
      </ul>
    </Content>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { HttpService } from '@/core/services/http.service';
  import Content from '@/components/layout/Content';
  import { TagInterface } from '@/core/models/TagInterface';

  @Component({
    components: {
      Content,
    },
  })
  export default class PostsCategories extends Vue {
    private tags: TagInterface[] = null;

    private readonly form: object = {
      name: '',
      label: ''
    };

    private rules: object = {
      label: [
        { required: true, message: 'Please enter tag label', trigger: 'blur' },
      ],
      name: [
        { required: true, message: 'Please enter tag name', trigger: 'blur' },
      ],
    };

    async onAddCategory (): void {
      const response = await HttpService.post('/tags', {
        body: JSON.stringify(this.form)
      });
      this.tags.push(response);
    }

    async mounted () {
      this.tags = await HttpService.get('/tags');
    }
  }
</script>

<style>

</style>

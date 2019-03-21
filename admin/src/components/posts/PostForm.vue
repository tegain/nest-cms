<template>
  <Form
    ref="form"
    :rules="rules"
    :model="form"
    label-position="top"
    :status-icon="true"
    :inline-message="true"
    class="tgn-PostForm"
  >
    <ElRow :gutter="60">
      <ElCol :span="18">
        <FormItem
          label="Title"
          prop="title"
          required
        >
          <ElInput v-model="form.title" @blur="setDefaultSlug" />
        </FormItem>

        <FormItem
          label="Content"
          prop="content"
          required
        >
          <MarkdownEditor v-model="form.content" :configs="editorOptions" />
        </FormItem>
      </ElCol>

      <ElCol :span="6">
        <ElCard shadow="never">
          <FormItem
            label="Slug (optional)"
            prop="slug"
          >
            <div class="tgn-PostForm__slug" slot="label">
              <span>Slug</span>
              <ElButton size="mini" @click="generateSlug" round :disabled="form.title === ''">Update</ElButton>
            </div>
            <ElInput v-model="form.slug" />
          </FormItem>

          <FormItem
            label="Publish on"
            prop="publishedAt"
          >
            <DatePicker type="datetime" v-model="form.publishedAt" placeholder="Pick a day" />
          </FormItem>

          <FormItem
            label="Visibility"
            prop="visibility"
          >
            <RadioGroup v-model="form.visibility">
              <RadioButton label="public" />
              <RadioButton label="private" />
            </RadioGroup>
          </FormItem>

          <FormItem
            label="Comments"
            prop="commentsEnabled"
          >
            <ElSwitch
              v-model="form.commentsEnabled"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="Enable"
              inactive-text="Disable"
            />
          </FormItem>

          <FormItem>
            <ElButton
              type="primary"
              icon="el-icon-plus"
              @click="onSubmit"
            >
              Save post
            </ElButton>
          </FormItem>
        </ElCard>
      </ElCol>
    </ElRow>
  </Form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MarkdownEditor from 'vue-simplemde/src/markdown-editor';
import {
  Autocomplete, Checkbox, DatePicker, Form, FormItem,
  Option, OptionGroup, Select, Switch, RadioGroup, RadioButton,
} from 'element-ui';
import { PostInterface, PostVisibility, PostStatus } from '@/core/models/PostInterface';
import { slugify } from '@/core/utils/slugify';

@Component({
  components: {
    Form,
    FormItem,
    Select,
    Option,
    OptionGroup,
    DatePicker,
    Checkbox,
    Autocomplete,
    ElSwitch: Switch,
    RadioGroup,
    RadioButton,
    MarkdownEditor,
  },
})
export default class PostForm extends Vue {
  private form: PostInterface = {
    title: '',
    slug: '',
    content: '',
    publishedAt: new Date(),
    visibility: PostVisibility.PUBLIC,
    author: '5c8a9a220be58d0c8b4849bd',
    status: PostStatus.PUBLISHED,
    commentsEnabled: true,
  };

  private rules: object = {
    title: [
      { required: true, message: 'Please enter post title', trigger: 'blur' },
    ],
  };

  private editorOptions: object = {
    placeholder: 'Enter post content',
  };

  get datepickerOptions(): object {
    return {
      disabledDate(time: Date): boolean {
        return time.getTime() > Date.now();
      },

      shortcuts: [
        {
          text: 'Today',
          onClick(picker: Vue): void {
            picker.$emit('pick', new Date());
          },
        },
        {
          text: 'Yesterday',
          onClick(picker: Vue): void {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          },
        },
        {
          text: 'A week ago',
          onClick(picker: Vue): void {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          },
        },
      ],
    };
  }

  public generateSlug(): void {
    this.form.slug = slugify(this.form.title);
  }

  public setDefaultSlug(): void {
    if (!this.form.slug) {
      this.form.slug = slugify(this.form.title);
    }
  }

  public onSubmit(): void {
    this.setDefaultSlug();

    (this.$refs.form as any).validate((valid: boolean, fields: object) => {
      // console.log('validated', valid, fields);
    });
    // console.log('submit!');
  }
}
</script>

<style lang="scss" scoped>
  @import '~simplemde/dist/simplemde.min.css';

  .tgn-PostForm {
    /deep/ label[for="slug"] {
      width: 100%;
    }

    &__slug {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>

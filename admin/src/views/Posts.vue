<template>
  <div class="tgn-Posts">
    <div class="tgn-Posts__topbar">
      <h1 class="tgn-Heading tgn-Heading--h1">
        Posts
        <span class="tgn-Heading__subtitle tgn-Heading__subtitle--inline">
          ({{ posts.length }})
        </span>
      </h1>

      <ElInput
        v-model="search"
        placeholder="Search..."
        size="large"
        prefix-icon="el-icon-search"
        class="tgn-Posts__search"
      />

      <router-link
        :to="{ name: 'create-post' }"
      >
        <ElButton type="primary" icon="el-icon-plus">
          Create new post
        </ElButton>
      </router-link>
    </div>

    <AppContent>
      <div class="tgn-Posts__list">
        <Table
          :data="posts.filter(p => !search || p.title.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%"
          stripe
        >
          <!--<TableColumn
            type="selection"
            width="55"
          />-->

          <TableColumn
            prop="title"
            label="Title"
            sortable
          >
            <template slot-scope="scope">
              <span>{{ scope.row.title | excerpt(50) }}</span>
            </template>
          </TableColumn>

          <TableColumn
            prop="publishedAt"
            label="Date"
            width="220"
            sortable
          >
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">
                {{ scope.row.publishedAt | date('DD MMM YYYY') }}
              </span>
            </template>
          </TableColumn>

          <TableColumn
            prop="status"
            label="Status"
            width="280"
            sortable
          />

          <TableColumn
            prop="author"
            label="Author"
            width="280"
            sortable
          />

          <TableColumn
            width="120"
            align="right"
            label="Actions"
          >
            <template slot-scope="scope">
              <Tooltip content="Edit post" placement="top">
                <ElButton
                  size="mini"
                  icon="el-icon-edit"
                  plain
                  circle
                  @click="handleEdit(scope.$index, scope.row)"
                />
              </Tooltip>

              <Tooltip content="Delete post" placement="top">
                <ElButton
                  size="mini"
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  @click="handleDelete(scope.$index, scope.row)"
                />
              </Tooltip>
            </template>
          </TableColumn>
        </Table>
      </div>
    </AppContent>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { Table, TableColumn, Tooltip } from 'element-ui';
  import { PostInterface } from '@/core/models/PostInterface';
  import AppContent from '@/components/layout/Content.vue';

  @Component({
    components: {
      AppContent,
      Table,
      TableColumn,
      Tooltip,
    },
  })
  export default class Posts extends Vue {
    private search: string = '';

    private readonly posts: PostInterface[] = [
      {
        publishedAt: '2019-03-16T18:51:43.005Z',
        status: 'published',
        visibility: 'public',
        _id: '5c8d45f23a69b52cad5bc61d',
        title: 'Lorem ipsum dolor sit amet',
        slug: 'lorem-ipsum-dolor-sit-amet',
        content: 'Lorem ipsum dolor',
        author: '5c8a9a220be58d0c8b4849bd',
      },
      {
        publishedAt: '2019-03-17T21:59:16.069Z',
        status: 'published',
        visibility: 'public',
        _id: '5c8d45f23a69b52cad5bc413',
        title: 'Dolor sit amet consectetur',
        slug: 'dolor-sit-amet-consectetur',
        content: 'Lorem ipsum dolor',
        author: '5c8a9a220be58d0c8b4849bd',
      },
    ];
  }
</script>

<style lang="scss">
  .tgn-Posts {
    &__topbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__search {
      max-width: 30rem;
      margin-left: auto;
      margin-right: 2rem;

      input {
        background: #fff;
        border: 1px solid $--border-color-lighter;
      }
    }
  }
</style>

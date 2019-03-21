<template>
  <div class="tgn-Admin">
    <Container direction="horizontal">
      <AppSidebar />

      <Container direction="vertical">
        <AppHeader />

        <Main>
          <AppBreadcrumb />
          <div class="tgn-Main">
            <router-view />
          </div>
        </Main>
      </Container>
    </Container>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { Container, Main } from 'element-ui';

  import AppHeader from '@/components/layout/Header.vue';
  import AppSidebar from '@/components/layout/Sidebar.vue';
  import AppBreadcrumb from '@/components/layout/Breadcrumb.vue';

  @Component({
    components: {
      AppHeader,
      AppSidebar,
      AppBreadcrumb,
      Container,
      Main,
    },
  })
  export default class Admin extends Vue {}
</script>

<style lang="scss" scoped>
  .el-main {
    padding: 2rem;

    @include breakpoint(desktopXLarge__min) {
      padding: 3rem 5rem;
    }
  }
</style>

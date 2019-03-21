<template>
  <div class="tgn-Breadcrumb">
    <Breadcrumb
      v-show="$route.name !== 'admin'"
      separator-class="el-icon-arrow-right"
    >
      <BreadcrumbItem
        v-for="route in $route.matched"
        :key="route.path"
        :disabled="$route.path === route.path"
      >
        <RouterLink :to="{ name: route.name }">
          <i v-if="route.name === 'admin'" class="el-icon-f-home"></i>
          <template v-else>
            {{ route.meta.name }}
          </template>
        </RouterLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Breadcrumb, BreadcrumbItem } from 'element-ui';

@Component({
  components: {
    Breadcrumb,
    BreadcrumbItem,
  },
})
export default class AppBreadcrumb extends Vue {}
</script>

<style lang="scss" scoped>
  .tgn-Breadcrumb {
    padding-bottom: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &__backBtn {
      margin-right: 2rem;
    }
  }
</style>

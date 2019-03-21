<template>
  <Menu
    class="tgn-Sidebar"
    :collapse="isCollapsed"
    :default-active="$route.path"
  >
    <div class="tgn-Sidebar__inner">
      <RouterLink :to="{ name: 'admin' }" class="tgn-Sidebar__logo">
        Dashboard
      </RouterLink>

      <div class="tgn-Sidebar__menu tgn-Menu">
        <Submenu index="1" class="tgn-Menu__submenu">
          <template slot="title">
            <RouterLink :to="{ name: 'posts' }" class="tgn-Menu__link tgn-Menu__link--main" :exact-active-class="linkExactActiveClass" :active-class="linkActiveClass">
              <i class="tgn-Menu__icon el-icon-f-pen-tool"></i>
              <span class="tgn-Menu__label">Posts</span>
            </RouterLink>
          </template>

          <MenuItem index="posts" class="tgn-Menu__item">
            <RouterLink :to="{ name: 'posts' }" class="tgn-Menu__link" :exact-active-class="linkExactActiveClass" :active-class="linkActiveClass">
              <i class="tgn-Menu__icon"></i>
              <span class="tgn-Menu__label">All posts</span>
            </RouterLink>
          </MenuItem>

          <MenuItem index="posts1" class="tgn-Menu__item">
            <RouterLink :to="{ name: 'create-post' }" exact class="tgn-Menu__link" :exact-active-class="linkExactActiveClass" :active-class="linkActiveClass">
              <i class="tgn-Menu__icon"></i>
              <span class="tgn-Menu__label">Create new post</span>
            </RouterLink>
          </MenuItem>
        </Submenu>

        <MenuItem index="pages" class="tgn-Menu__item">
          <RouterLink to="/admin" exact class="tgn-Menu__link tgn-Menu__link--main" :exact-active-class="linkExactActiveClass" :active-class="linkActiveClass">
            <i class="tgn-Menu__icon el-icon-f-file-text"></i>
            <span class="tgn-Menu__label">Pages</span>
          </RouterLink>
        </MenuItem>
      </div>
    </div>
  </Menu>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Menu, Submenu, MenuItem } from 'element-ui';

@Component({
  components: {
    Menu,
    Submenu,
    MenuItem,
  },
})
export default class AppSidebar extends Vue {
  private iconName: string = 'el-icon-d-arrow-left';

  get isCollapsed(): boolean {
    return this.$store.state.sidebarCollapsed;
  }

  public toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconName = this.isCollapsed
      ? 'el-icon-d-arrow-right'
      : 'el-icon-d-arrow-left';
  }

  get linkActiveClass(): string {
    return 'tgn-Menu__link--active';
  }

  get linkExactActiveClass(): string {
    return 'tgn-Menu__link--exact';
  }
}
</script>

<style lang="scss">
  .tgn-Sidebar {
    position: relative;
    background: #fff;
    min-height: 100vh;

    &:not(.el-menu--collapse) {
      width: $app-sidebar-width;
      min-height: 100vh;
    }

    &__inner {
      position: sticky;
      top: 0;
      height: auto;
    }

    &__logo {
      display: block;
      width: 100%;
      border-right: 1px solid $app-container-border-color;
      font-size: 2rem;
      text-align: center;
      font-weight: 700;
      text-transform: lowercase;
      line-height: 60px;
      text-decoration: none;
    }

    &__menu {
      margin: 2.8rem 0;
    }

    &__footer {
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 2rem 1.2rem;
    }
  }

  .tgn-Menu {
    &__item,
    .el-submenu__title {
      padding: 0 !important;
    }

    &__label {
      margin-left: 1rem;
      will-change: transform;
      transition: transform .1s, opacity .1s;

      .el-menu--collapse & {
        opacity: 0;
        transform: translateX(3rem);
      }
    }

    &__link {
      padding: 0 2.5rem;
      display: block;
      text-decoration: none;
      position: relative;

      &--main {
        &:before {
          content: '';
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 1rem;
          height: 100%;
          background: $--color-primary;
          border-radius: 1rem;
          transform: translateX(-50%);
          opacity: 0;
        }
      }

      i {
        color: $--color-primary-light-5;
        font-size: 1.2em;
      }

      &--active {
        transition: background-color .25s;

        &:not(:hover) {
          background: $app-background-color;
        }

        &:before {
          opacity: 1;
        }

        i {
          color: inherit;
        }
      }
    }

    &__submenu {
      ul .tgn-Menu__link {
        color: $--color-info;

        i {
          display: inline-block;
          margin-right: .8rem;
          width: .5rem;
          height: .5rem;
          border-radius: 50%;
          border: 2px solid $app-content-color;
        }

        &--exact {
          color: $app-content-color;

          i {
            background: $app-content-color;
          }
        }
      }
    }

    .el-menu--collapse & {

      &__item,
      .el-submenu__title {
        margin: 0 .6rem .4rem !important;
        border-radius: .3rem;
        overflow: hidden;
      }

      &__link {
        text-align: center;
        padding: 0 1rem;

        &:before {
          display: none;
        }
      }

      &__label {
        display: none;
      }
    }
  }
</style>

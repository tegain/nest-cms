<template>
  <Header class="tgn-Header" height="64px">
    <ElButton type="plain" circle icon="el-icon-f-menu" size="medium" class="tgn-Header__toggler" @click="toggleSidebar" />

    <ElInput
      placeholder="Search..."
      size="large"
      prefix-icon="el-icon-search"
      class="tgn-Header__search"
    />

    <Dropdown trigger="click" class="tgn-Header__user-menu">
      <ElButton type="text" class="tgn-Header__user-name">
        Thomas <i class="el-icon-arrow-down el-icon--right" />
      </ElButton>

      <DropdownMenu slot="dropdown" class="tgn-Header__user-actions">
        <DropdownItem icon="el-icon-setting">Account</DropdownItem>
        <DropdownItem icon="el-icon-f-log-out" divided>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </Header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Dropdown, DropdownItem, DropdownMenu, Header } from 'element-ui';
import { TOGGLE_SIDEBAR } from '@/store';

@Component({
  components: {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Header,
  },
})
export default class AppHeader extends Vue {
  private toggleSidebar(): void {
    this.$store.commit(TOGGLE_SIDEBAR);
  }
}
</script>

<style lang="scss" scoped>
  .tgn-Header {
    position: sticky;
    z-index: 5;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid $app-container-border-color;

    &__toggler.el-button {
      border: none;
      margin-right: 5rem;

      /deep/ i {
        font-size: 1.5em;
      }
    }

    &__user {
      &-name {
        color: $app-content-color;
      }

      &-actions {
        /deep/ i {
          margin-right: 2rem;
        }
      }
    }
  }

  /deep/ .el-input {
    width: 30rem;
    max-width: 30vw;
    margin-right: auto;
    transition: width .15s ease-in;

    &__inner {
      border: none;
      background: lighten($--border-color-lighter, 2%);
    }

    &:focus-within {
      width: 45rem;
      max-width: 50vw;
    }
  }
</style>

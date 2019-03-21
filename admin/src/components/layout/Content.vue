<template>
  <div class="tgn-Content">
    <slot />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component({})
  export default class AppContent extends Vue {}
</script>

<style lang="scss">
  .tgn-Content {
    background: #fff;
    padding: 4rem;
    box-shadow: 0 3rem 2.8rem -1rem rgba($--color-text-secondary, .15);
    border-radius: .8rem;
  }
</style>

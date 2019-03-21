<template>
  <div
    class="tgn-App"
  >
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-property-decorator';

  export default class App extends Vue {}
</script>

<style lang="scss">
  @import './styles/index';
</style>

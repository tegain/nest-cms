<template>
  <div class="tgn-Tasks">
    <h1 class="tgn-Heading">Tasks</h1>

    <AppContent>
      <form action="#" @submit.prevent="onSubmit" novalidate>

      </form>
    </AppContent>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import AppContent from '@/components/layout/Content.vue';
  import { TaskInterface } from '@/core/models/TaskInterface';

  @Component({
    components: {
      AppContent,
    },
  })
  export default class Tasks extends Vue {
    private tasks: TaskInterface[] = [
      {}
    ]
  }
</script>

<style>

</style>

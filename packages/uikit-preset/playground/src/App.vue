<script lang="ts" setup>
import Card from './components/card.vue'
import Color from './components/color.vue'
import Header from './components/header.vue'
</script>

<template>
  <main class="flex flex-col gap-12 p-6">
    <Header />

    <Card title="Theme">
      <div class="grid cols-4 gap-2">
        <Color class="bg-primary" label="primary" />
        <Color class="bg-primary-soft" label="primary-soft" />
        <Color class="bg-primary-muted" label="primary-muted" />
        <Color class="bg-primary-active" label="primary-active" />

        <Color class="bg-accent" label="accent" />
        <Color class="bg-accent-soft" label="accent-soft" />
        <Color class="bg-accent-muted" label="accent-muted" />
        <Color class="bg-accent-active" label="accent-active" />

        <Color class="bg-info" label="info" />
        <Color class="bg-info-soft" label="info-soft" />
        <Color class="bg-info-muted" label="info-muted" />
        <Color class="bg-info-active" label="info-active" />

        <Color class="bg-success" label="success" />
        <Color class="bg-success-soft" label="success-soft" />
        <Color class="bg-success-muted" label="success-muted" />
        <Color class="bg-success-active" label="success-active" />

        <Color class="bg-warning" label="warning" />
        <Color class="bg-warning-soft" label="warning-soft" />
        <Color class="bg-warning-muted" label="warning-muted" />
        <Color class="bg-warning-active" label="warning-active" />

        <Color class="bg-danger" label="danger" />
        <Color class="bg-danger-soft" label="danger-soft" />
        <Color class="bg-danger-muted" label="danger-muted" />
        <Color class="bg-danger-active" label="danger-active" />
      </div>
    </Card>

    <Card title="Background">
      <div class="grid cols-6 gap-2">
        <Color class="bg-page" label="page" />
        <Color class="bg-sidebar" label="sidebar" />
        <Color class="bg-navigator" label="navigator" />
        <Color class="bg-panel" label="panel" />
        <Color class="bg-overlay" label="overlay" />
        <Color class="bg-separator" label="separator" />
      </div>
    </Card>

    <Card title="Foreground">
      <div class="grid cols-6 gap-2">
        <Color class="bg-fg" label="fg" />
        <Color class="bg-fg-soft" label="fg-soft" />
        <Color class="bg-fg-muted" label="fg-muted" />
        <Color class="bg-fg-active" label="fg-active" />
      </div>
    </Card>

    <Card title="Alpha">
      <div class="grid cols-6 gap-2">
        <Color class="bg-neutral-a8" label="neutral-a8" />
        <Color class="bg-blue-a8" label="blue-a8" />
        <Color class="bg-iris-a8" label="iris-a8" />
      </div>
    </Card>
  </main>
</template>

<style>
html,
body,
#app {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f7f8f9;
}
</style>

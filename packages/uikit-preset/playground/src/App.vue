<script lang="ts" setup>
import Card from './components/card.vue'
import Header from './components/header.vue'
</script>

<template>
  <main class="flex flex-col gap-12 p-6">
    <Header />

    <Card title="Colors">
      HHH
    </Card>

    <Card title="Theme" />
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f7f8f9;
}
</style>

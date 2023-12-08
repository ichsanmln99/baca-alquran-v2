<template>
  <div
    class="max-w-3xl w-full mx-auto bg-base-100 h-full min-h-screen shadow-xl"
  >
    <ConfigDrawer>
      <slot></slot>
    </ConfigDrawer>
    <Footer />
  </div>
</template>

<style>
body {
  @apply bg-base-200;
}
</style>

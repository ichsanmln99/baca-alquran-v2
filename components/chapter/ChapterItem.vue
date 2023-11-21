<template>
  <NuxtLink
    id="NuxtLink"
    class="p-4 bg-base-200 rounded-xl flex gap-4 items-center hover:bg-base-300 cursor-pointer group"
    :to="{ path: `/chapter/${id}` }"
  >
    <div
      class="bg-base-300 mask mask-circle w-8 h-8 text-sm flex items-center justify-center"
    >
      <span data-test="chapter-id">{{ id }}</span>
    </div>
    <div class="flex-1 pr-4">
      <h3 data-test="chapter-name">{{ name }}</h3>
      <div class="text-sm opacity-40 flex gap-1.5">
        <div class="flex-initial">
          <div
            data-test="chapter-translation"
            class="line-clamp-1 break-all w-full"
          >
            {{ translate }}
          </div>
        </div>
        <div class="flex-none">•</div>
        <div class="flex-none" data-test="chapter-verses-count">
          {{ versesCount }} Ayat
        </div>
      </div>
    </div>
    <div class="text-2xl font-arabic" data-test="chapter-arabic">
      {{ arabic }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  id: number;
  name: string;
  arabic: string;
  versesCount: number;
  translate: string;
}>();
</script>

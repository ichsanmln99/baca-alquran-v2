<template>
  <div class="flex justify-between p-2 items-center relative mb-5">
    <div>
      <NuxtLink
        :to="{
          path: `/chapter/${chapterNavigation.previous.id}`,
        }"
        v-if="chapterNavigation.previous"
        class="btn btn-xs btn-link text-neutral no-underline"
      >
        <Icon name="iconamoon:arrow-left-2-bold" />
        {{ chapterNavigation.previous.name_simple }}
      </NuxtLink>
    </div>
    <div class="absolute left-1/2 -translate-x-1/2">
      <p v-if="chapterNavigation.current" class="text-xs text-neutral/30">
        {{ chapterNavigation.current.id }}/114
      </p>
    </div>
    <div>
      <NuxtLink
        :to="{
          path: `/chapter/${chapterNavigation.next.id}`,
        }"
        v-if="chapterNavigation.next"
        class="btn btn-xs btn-link text-neutral no-underline"
      >
        {{ chapterNavigation.next.name_simple }}
        <Icon name="iconamoon:arrow-right-2-bold" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ id: number }>();
const { getChapterNavigation } = useChapters();

const chapterNavigation = getChapterNavigation(props.id);
</script>

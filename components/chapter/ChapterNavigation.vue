<template>
  <div class="flex justify-between p-2 items-center relative mb-5 z-auto">
    <div>
      <NuxtLink
        :to="{
          path: `/chapter/${chapterNavigation.previous.id}`,
        }"
        v-if="chapterNavigation.previous"
        :aria-label="`Kembali ke Surah ${chapterNavigation.previous.name_simple}`"
        :title="`Kembali ke Surah ${chapterNavigation.previous.name_simple}`"
        class="btn btn-xs btn-link text-neutral dark:text-primary no-underline"
      >
        <Icon name="iconamoon:arrow-left-2-bold" />
        {{ chapterNavigation.previous.name_simple }}
      </NuxtLink>
    </div>
    <div class="absolute left-1/2 -translate-x-1/2">
      <p
        v-if="chapterNavigation.current"
        class="text-xs text-base-content/40"
        :aria-label="`Surah ke ${chapterNavigation.current.id} dari 114`"
      >
        {{ chapterNavigation.current.id }}/114
      </p>
    </div>
    <div>
      <NuxtLink
        :to="{
          path: `/chapter/${chapterNavigation.next.id}`,
        }"
        v-if="chapterNavigation.next"
        class="btn btn-xs btn-link text-neutral dark:text-primary no-underline"
        :aria-label="`Lanjut ke Surah ${chapterNavigation.next.name_simple}`"
        :title="`Lanjut ke Surah ${chapterNavigation.next.name_simple}`"
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

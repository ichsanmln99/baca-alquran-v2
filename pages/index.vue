<template>
  <div>
    <NavbarHome v-model:search="search" />

    <div class="p-4 flex flex-col gap-3">
      <ChapterItemLastestRead />
      <template v-for="chapter in chapterList" :key="chapter.id">
        <ChapterItem
          :id="chapter.id"
          :name="chapter.name_simple"
          :arabic="chapter.name_arabic"
          :translate="chapter.translated_name.name"
          :versesCount="chapter.verses_count"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: chapters } = useChapters();

const search = ref("");

const chapterList = computed(() => {
  const splitSearchText = search.value.toLocaleLowerCase().split(" ");

  return chapters.value.filter((chapter) =>
    splitSearchText.every((text) =>
      chapter.name_simple.toLocaleLowerCase().includes(text)
    )
  );
});
</script>

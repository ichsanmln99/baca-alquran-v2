<template>
  <div class="flex flex-col min-h-screen">
    <NavbarHome v-model:search="search" />

    <div class="p-4 flex flex-col gap-3">
      <ChapterItemLastestRead v-if="!search" />
      <template v-for="chapter in chapterList" :key="chapter.id">
        <ChapterItem
          :id="chapter.id"
          :name="chapter.name_simple"
          :arabic="chapter.name_arabic"
          :translate="chapter.translated_name.name"
          :versesCount="chapter.verses_count"
        />
      </template>

      <template v-if="!chapterList.length && search">
        <div
          class="flex flex-col justify-center text-center p-10 text-base-content/40"
        >
          <div class="p-5">
            <Icon size="48" name="iconamoon:search"></Icon>
          </div>
          <div>Surat Tidak ditemukan</div>
        </div>
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

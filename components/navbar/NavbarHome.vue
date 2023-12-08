<template>
  <div
    class="navbar items-center backdrop-blur-md bg-base-100/50 p-4 border-b border-base-200 sticky top-0 z-10 navbar-scroll shadow-xl shadow-base-200/30 gap-4"
  >
    <router-link to="/" class="flex-0 text-4xl select-none">
      <img
        v-once
        src="/bq-40x40.svg"
        alt="Logo baca-alquran.com"
        height="40"
        width="40"
        class="hover:drop-shadow-lg hover:cursor-pointer"
      />
    </router-link>
    <div class="flex-1 gap-2 relative">
      <Icon
        v-show="!search"
        name="iconamoon:search-bold"
        class="text-base-content/30 absolute left-5"
        size="20"
      ></Icon>
      <input
        :value="search"
        @input="
          $emit('update:search', ($event.target as HTMLInputElement).value)
        "
        class="input rounded-full w-full input-ghost placeholder:pl-9 placeholder:text-base-content/30"
        type="text"
        aria-label="Cari Surat"
        placeholder="Baca Surat Apa Hari Ini?"
      />
      <button
        class="btn btn-xs absolute right-2 btn-circle"
        aria-label="Hapus Pencarian"
        v-if="search"
        @click="clearSearch"
      >
        <Icon size="16" name="iconamoon:close" />
      </button>
    </div>
    <div class="flex-none">
      <ConfigDrawerButton />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ search: string }>();
const emit = defineEmits(["update:search"]);

function clearSearch() {
  emit("update:search", "");
}
</script>

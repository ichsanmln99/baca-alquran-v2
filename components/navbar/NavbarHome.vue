<template>
  <div
    class="navbar backdrop-blur-md bg-base-100/50 p-4 border-b sticky top-0 z-10 navbar-scroll shadow-xl shadow-base-200/30"
  >
    <router-link to="/" class="flex-0 text-4xl pr-4 select-none">
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
      <input
        :value="search"
        @input="
          $emit('update:search', ($event.target as HTMLInputElement).value)
        "
        class="input rounded-full w-full bg-transparent"
        type="text"
        placeholder="Baca Surat apa hari ini?"
      />
      <button
        class="btn btn-xs absolute right-2 btn-circle"
        v-if="search"
        @click="clearSearch"
      >
        <Icon size="16" name="iconamoon:close" />
      </button>
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

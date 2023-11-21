<template>
  <div class="py-6 px-4 border-t border-base-200 mx-4 text-center">
    <a
      href="https://baca-alquran.com"
      class="flex gap-2 justify-center items-center mb-4"
    >
      <img
        v-once
        src="/bq-40x40.svg"
        alt="Logo baca-alquran.com"
        height="20"
        width="20"
      />
      <span class="opacity-60 text-sm">baca-alquran.com</span>
    </a>

    <p class="text-xs opacity-40 mb-2">
      Baca dan dengarkan audio Al-Quran 30 Juz dengan Terjemahan Bahasa
      Indonesia secara Online. Gratis tanpa iklan.
    </p>

    <div class="flex justify-center mb-4">
      <label class="flex cursor-pointer gap-2">
        <Icon size="16" class="swap-on" name="iconamoon:mode-light"></Icon>

        <input
          type="checkbox"
          v-model="isDark"
          @click="toggleDarkMode()"
          class="toggle toggle-xs"
        />
        <Icon size="16" class="swap-off" name="iconamoon:mode-dark"></Icon>
      </label>
    </div>

    <p class="text-xs opacity-40">
      Dibuat oleh
      <a href="https://ichsanmaulana.com" class="link">Ichsan Maulana</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
  initialValue: "auto",
  selector: "html",
  attribute: "data-theme",
  valueDark: "dark",
  valueLight: "light",
});

const toggleDarkMode = useToggle(isDark);
</script>

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
      <span class="text-base-content/40 text-sm">baca-alquran.com</span>
    </a>

    <div class="flex justify-center">
      <div class="text-xs text-base-content/40 mb-2 sm:w-2/3">
        Baca dan dengarkan audio Al-Quran 30 Juz dengan Terjemahan Bahasa
        Indonesia secara Online. Gratis tanpa iklan.
      </div>
    </div>

    <!-- <div class="flex justify-center mb-4">
      <label for="toggle-dark-mode" class="flex cursor-pointer gap-2">
        <Icon size="16" class="swap-on" name="iconamoon:mode-light"></Icon>
        <input
          type="checkbox"
          v-model="isDark"
          @click="toggleDarkMode()"
          class="toggle toggle-xs"
          id="toggle-dark-mode"
          name="toggle-dark-mode"
        />
        <Icon size="16" class="swap-off" name="iconamoon:mode-dark"></Icon>
      </label>
    </div> -->

    <p class="text-xs text-base-content/40">
      Dibuat oleh
      <a href="https://ichsanmaulana.com" class="link">Ichsan Maulana</a>
    </p>
  </div>
</template>

<!-- <script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
  initialValue: "auto",
  selector: "html",
  attribute: "data-theme",
  valueDark: "dark",
  valueLight: "light",
});

const toggleDark = useToggle(isDark);

function toggleDarkMode() {
  toggleDark();

  const bgColor = isDark.value ? "#1c1c1c" : "#efeae6";

  useHead({
    meta: [{ name: "theme-color", content: bgColor }],
  });
}
</script> -->

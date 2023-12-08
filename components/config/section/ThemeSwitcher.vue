<template>
  <div>
    <label class="label label-text text-base-content/60">Tema</label>
    <div class="bg-base-200 p-1 rounded-full flex text-sm">
      <div class="flex-1">
        <input
          id="light-theme"
          type="radio"
          class="hidden peer"
          value="light"
          v-model="theme"
        />
        <label
          for="light-theme"
          class="btn btn-block btn-sm btn-ghost font-normal peer-checked:bg-base-100"
        >
          <Icon size="16" name="iconamoon:mode-light"></Icon> Terang
        </label>
      </div>
      <div class="flex-1">
        <input
          id="dark-theme"
          type="radio"
          class="hidden peer"
          value="dark"
          v-model="theme"
        />
        <label
          for="dark-theme"
          class="btn btn-block btn-sm font-normal peer-checked:bg-base-100 peer-checked:text-primary"
        >
          <Icon size="16" name="iconamoon:mode-dark"></Icon> Gelap
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColorMode, type BasicColorSchema } from "@vueuse/core";

const theme = useColorMode({
  initialValue: "auto",
  selector: "html",
  attribute: "data-theme",
  modes: {
    dark: "dark",
    light: "light",
  },
});

function toggleDarkMode(selectedTheme: BasicColorSchema) {
  theme.value = selectedTheme;
  const bgColor = theme.value === "light" ? "#1c1c1c" : "#efeae6";
  useHead({
    meta: [{ name: "theme-color", content: bgColor }],
  });
}
</script>

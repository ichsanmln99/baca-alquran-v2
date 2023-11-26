<template>
  <ModalWrapper :id="modalId" @close="$emit('close')">
    <div class="flex flex-col h-full w-full">
      <div class="pb-4">
        <form method="dialog">
          <button
            @click="closeModal()"
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h3 class="font-bold text-lg">Tafsir Ayat {{ modalData?.number }}</h3>
      </div>

      <div ref="tafsirRef" class="h-full overflow-y-scroll -mx-6 p-6">
        <div class="bg-base-200/50 dark:bg-base-200 rounded-xl px-5 py-8 mb-8">
          <p class="py-4 font-arabic text-3xl leading-loose" dir="rtl">
            {{ modalData?.arabic }}
          </p>
          <p class="text-sm opacity-80" v-html="modalData?.translate"></p>
        </div>

        <p v-if="!loading" class="whitespace-pre-line leading-relaxed">
          {{ tafsir?.data.tafsir.tahlili.replace(/\n/g, "\n\n") }}
        </p>
        <VerseTafsirSkeleton v-else />
      </div>
    </div>
  </ModalWrapper>
</template>

<script setup lang="ts">
import { useModalStore } from "~/store/modal";
import type { IGetByVerseIdResponse } from "~/types/tafsirs.interface";

const emit = defineEmits(["close"]);

const modalId = "VerseTafsirModal";

const { $api } = useNuxtApp();
const tafsir = ref<IGetByVerseIdResponse>();
const tafsirRef = ref<HTMLElement>();
const loading = ref(false);

const modalStore = useModalStore();
const modalData = computed(() => modalStore.getModalData(modalId));

onMounted(async () => {
  if (modalData.value?.id) await loadTafsir();
});

async function loadTafsir() {
  loading.value = true;
  tafsir.value = await fetchTafsir();
  loading.value = false;
}

function fetchTafsir() {
  return $api.tafsirs.getByVerseId(modalData.value?.id);
}

function closeModal() {
  modalStore.closeModal(modalId);
  emit("close");
}
</script>

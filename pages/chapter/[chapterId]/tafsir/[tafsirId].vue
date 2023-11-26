<template>
  <VerseTafsirModal @close="routeBack()"></VerseTafsirModal>
</template>

<script setup lang="ts">
import { useModalStore } from "~/store/modal";

const modalStore = useModalStore();
const router = useRouter();

definePageMeta({
  preventLoadScrollTop: true,
});

onMounted(() => {
  const data = modalStore.getModalData("VerseTafsirModal");
  if (data?.id) {
    modalStore.openModal("VerseTafsirModal");
  } else {
    routeBack();
  }
});

function routeBack() {
  router.go(-1);
}
</script>

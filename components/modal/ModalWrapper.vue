<template>
  <Teleport to="body">
    <dialog
      class="modal modal-bottom"
      :class="{ 'modal-open': modalStore.isOpen }"
    >
      <div class="modal-box max-w-lg w-full mx-auto h-5/6">
        <component
          :is="modalStore.modalState?.component"
          v-bind="modalStore.modalState?.props"
        ></component>
      </div>
      <form
        method="dialog"
        @click="modalStore.closeModal()"
        class="modal-backdrop"
      >
        <button></button>
      </form>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
import { useModalStore } from "~/store/modal";

const router = useRouter();
const modalStore = useModalStore();

router.beforeEach((to, from, next) => {
  if (modalStore.isOpen) {
    modalStore.closeModal();
    return false;
  } else {
    return next();
  }
});
</script>

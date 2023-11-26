<template>
  <Teleport to="body">
    <dialog
      :key="id"
      :id="id"
      class="modal modal-bottom"
      :class="{ 'modal-open': modalStore.isModalOpen(id) }"
    >
      <div class="modal-box max-w-lg w-full mx-auto h-5/6">
        <slot></slot>
      </div>
      <form method="dialog" @click="closeModal()" class="modal-backdrop">
        <button></button>
      </form>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
import { useModalStore } from "~/store/modal";

const props = withDefaults(
  defineProps<{
    id: string;
  }>(),
  {
    id: "modal",
  }
);

const emit = defineEmits(["close"]);

const modalStore = useModalStore();

onMounted(() => {
  modalStore.registerModal(props.id);
});

onBeforeUnmount(() => {
  modalStore.destroyModal(props.id);
});

function closeModal() {
  modalStore.closeModal(props.id);
  emit("close");
}
</script>

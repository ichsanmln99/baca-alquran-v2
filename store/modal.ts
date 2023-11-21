import type { Component } from "vue";

export interface IModalState {
  component: null | Component;
  props?: object;
}

const basicState = {
  component: null,
  props: {},
};

export const useModalStore = defineStore("modal", () => {
  const modalState = shallowRef<IModalState>(basicState);
  const isOpen = ref(false);

  function openModal(payload: IModalState) {
    const { component, props } = payload;
    modalState.value = {
      component,
      props,
    };

    isOpen.value = true;
  }

  function closeModal() {
    isOpen.value = false;
  }

  return {
    isOpen,
    modalState,
    openModal,
    closeModal,
  };
});

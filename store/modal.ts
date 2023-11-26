interface IModals {
  id: string;
  isOpen: boolean;
  data: {
    [key: string]: any;
  };
}

export const useModalStore = defineStore("modal", () => {
  const modals = ref<IModals[]>([]);

  function openModal(id: string) {
    const modal = getModalState(id);
    if (modal) {
      modal.isOpen = true;
    }
  }

  function closeModal(id: string) {
    const modal = getModalState(id);
    if (modal) {
      modal.isOpen = false;
    }
  }

  function isModalOpen(id: string) {
    const modal = getModalState(id);

    if (modal) {
      return modal.isOpen;
    }
    return false;
  }

  function getModalData(id: string) {
    const modal = getModalState(id);

    if (modal) {
      return modal.data;
    }
    return null;
  }

  function setModalData(id: string, data: object) {
    const modal = getModalState(id);

    if (modal) {
      modal.data = data;
    }
  }

  function getModalState(id: string) {
    const modal = modals.value.find((modal) => modal.id === id);

    if (modal) {
      return modal;
    }
    return null;
  }

  function registerModal(id: string) {
    const modalExist = getModalState(id);

    if (!modalExist) {
      const modal = {
        id,
        isOpen: false,
        data: {},
      };

      modals.value.push(modal);
    }
  }

  function destroyModal(id: string) {
    const index = modals.value.findIndex((modal) => modal.id === id);
    if (index > -1) {
      modals.value.splice(index, 1);
    }
  }

  return {
    modals,
    openModal,
    closeModal,
    registerModal,
    destroyModal,
    isModalOpen,
    getModalData,
    setModalData,
    getModalState,
  };
});

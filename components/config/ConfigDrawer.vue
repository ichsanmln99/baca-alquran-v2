<template>
  <div class="drawer drawer-end">
    <input id="config-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot></slot>
    </div>
    <div class="drawer-side z-20">
      <label
        for="config-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <div
        class="w-full sm:w-80 min-h-full bg-base-100 border-l border-base-200 text-base-content"
      >
        <div class="navbar justify-between p-4 border-b border-base-200">
          <h3 class="font-semibold">Setting</h3>
          <div>
            <label
              for="config-drawer"
              aria-label="Tutup Konfigurasi"
              class="drawer-button btn btn-circle btn-ghost btn-sm text-base-content/70"
            >
              <Icon size="24" name="iconamoon:close-bold" />
            </label>
          </div>
        </div>
        <div class="p-4 flex flex-col gap-3">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  </div>
</template>

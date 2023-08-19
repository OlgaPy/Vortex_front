<script setup lang="ts">
</script>

<template>
  <main :class="[$style.container, 'color-bg-gray-98']">
    <header :class="$style.header">
      <slot name="header"></slot>
    </header>
    <main :class="$style.main">
      <h1 class="font-h1"><slot name="title"></slot></h1>
      <span class="font-text-small"><slot name="tags"></slot></span>
      <div :class="[$style.body, 'font-text-large']"><slot name="body"></slot></div>
    </main>
    <footer :class="$style.footer">
      <slot name="footer"></slot>
    </footer>
  </main>
</template>

<style module>
.container {
  display: flex;
  justify-items: start;
  align-items: start;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding-top: 20px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
}
.header > * {
  padding: 0 12px;
}

.main {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 12px;
}
.main > * {
  padding: 0 12px;
}

.body {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 10px;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid var(--color-base-bg);
}
.footer > * {
  padding: 16px 12px;
}

@media screen and (min-width: 834px) {
  .container {
    border-radius: var(--style-radius-10);
  }
}
</style>

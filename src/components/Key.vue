<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Key',
}
</script>

<style lang="scss">
.btn {
  font-size: var(--font-base-size);
  font-weight: 700;
  padding: 0.5rem;
  color: var(--color-key);
  background-color: var(--color-key-bg);
  box-shadow: 0 4px 0 0 var(--color-key-shadow);
  border: 0;
  border-radius: var(--radius-small);
  cursor: pointer;
  transition:
    transform ease-out 35ms,
    box-shadow ease-out 35ms,
    background-color ease-out 150ms,
    color ease-out 175ms;

  &:active,
  &.is-active {
    transform: translateY(4px);
    box-shadow: none;
  }

  &.double {
    grid-column: span 2;
  }

  &.is-selected {
    --color-key: var(--color-key--accent);
    --color-key-bg: var(--color-key-bg--accent);
    --color-key-shadow: var(--color-key-shadow--accent);
  }

  &.accent {
    --color-key: var(--color-key--accent);
    --color-key-bg: var(--color-key-bg--accent);
    --color-key-shadow: var(--color-key-shadow--accent);
  }

  &.confirm {
    --color-key: var(--color-key--confirm);
    --color-key-bg: var(--color-key-bg--confirm);
    --color-key-shadow: var(--color-key-shadow--confirm);
  }
}
</style>
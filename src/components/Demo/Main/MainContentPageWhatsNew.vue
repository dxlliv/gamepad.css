<script setup lang="ts">
const changelog = [
  {
    title: 'First release',
    changes: [
        'Provide a starter set of gamepad buttons',
    ]
  }
]
</script>

<template>
  <template v-for="release of changelog">
    <h3 v-text="release.title" />
    <ul>
      <li v-for="line of release.changes" v-text="line" />
    </ul>
  </template>
</template>

<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0 0 0 18px;
  list-style-type: none;

  li {
    margin: 0;
    color: initial;
    opacity: 0.65;

    &::before {
      content: "\25AA";
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
}
</style>

<template>
  <div id="app">
    <icon-grid />
  </div>
</template>

<script>

import IconGrid from "@/components/IconGrid";
export default {
  name: 'App',
  components: {IconGrid},
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

html {
  box-sizing: border-box;
}

body {
  background: linear-gradient(150deg, rgb(54, 60, 58) 0.00%, rgb(36, 37, 38) 100.00%);
  -webkit-touch-callout: none !important;
  min-height: 100vh;
  padding: 0;
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 60px 20px;
}
</style>

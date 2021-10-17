<template>
  <div id="app">
      <Header name="mirc-app"/>
  </div>
</template>
<script>

export default {
  components: {
    Header: () => import('portalApp/Header')
  }
}

</script>

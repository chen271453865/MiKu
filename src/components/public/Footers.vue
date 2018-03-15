<template>
  <div>f=oooter</div>
</template>
<template>
  <div class="footerDiv">Copyright&nbsp;&copy;&nbsp;{{author}} - 2016 All rights reserved</div>
</template>
<script>
  export default {
    name: 'footerDiv',
    computed: {
      author () {
        return this.$store.state.author
      }
    }
  }
</script>

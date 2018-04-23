<template>
  <div id="profile">
    <img :src=photo class="inline-block">
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {}
  },
  props: ['photo']
}
</script>

<style scoped>
  #profile {
    height: 170px;
    width: 100%;
    border-bottom: 2px gray solid;
  }
  #profile img {
    border-radius: 50%;
    width: 50%;
    margin: 3% 0 0 20%;

  }
</style>

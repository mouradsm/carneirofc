<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <h1>Extrato </h1>
  </q-page>
</template>

<style>
</style>

<script>

export default {
  name: 'PageIndex',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    vai () {
      console.log(this.user)
    }
  },
  created () {
    this.user = this.$store.state.users.user
  }
}
</script>

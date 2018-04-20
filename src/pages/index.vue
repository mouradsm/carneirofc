<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <h1>Extrato</h1>
  </q-page>
</template>

<style>
</style>

<script>
import firebase from 'firebase'
export default {
  name: 'PageIndex',
  data () {
    return {

    }
  },
  created () {
    this.$store.commit('users/setUser', firebase.auth().currentUser)
  }
}
</script>

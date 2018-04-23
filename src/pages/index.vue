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
  },
  created () {
    this.user = this.$store.state.users.user
    this.$db.ref('users/' + this.user.uid).once('value').then(function (snapshot) {
      let u = snapshot.val()
      console.log(u)
    })

    this.$db.ref('users/' + this.user.uid).set({
      score: 0.0
    })
  }
}
</script>

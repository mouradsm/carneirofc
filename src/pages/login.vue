<template>
  <q-page padding>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.7.0/firebaseui.css" />
    <!-- content -->
      <div id="firebaseui-auth-container"></div>
  </q-page>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
export default {
  name: 'PageLogin',
  data () {
    return {
      loading: true,
      user: null
    }
  },
  mounted () {
    var uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  },
  methods: {
    // signInWithGoogle () {
    //   const provider = new this.$auth.GoogleAuthProvider()
    //   this.$auth().signInWithRedirect(provider).then((result) => {
    //     this.user = result.user
    //     console.log(this.user)
    //   })
    // },
    beforeCreate () {
      this.$auth.onAuthStateChanged(user => {
        if (user) { this.$router.push({path: '/'}) }
      })

      this.loading = false
    }
  }
}

</script>

<style>
</style>

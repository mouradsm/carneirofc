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
    }
  },
  mounted () {
    let uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      signInFlow: 'redirect'
    }
    let ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style>
</style>

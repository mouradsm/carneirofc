import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDNS1l2A_u6tG86Nxl2n8Z0N3gOKorxnlw',
  authDomain: 'carneirofc-e78b5.firebaseapp.com',
  databaseURL: 'https://carneirofc-e78b5.firebaseio.com',
  projectId: 'carneirofc-e78b5',
  storageBucket: 'carneirofc-e78b5.appspot.com',
  messagingSenderId: '829760187629'
}

export const fireApp = firebase.initializeApp(config)

export const DB = fireApp.database()
export const AUTH = fireApp.auth()

export default({ app, router, Vue }) => {
  Vue.prototype.$auth = AUTH
  Vue.prototype.$db = DB
  Vue.prototype.$firebase = fireApp
}

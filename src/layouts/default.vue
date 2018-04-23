<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy= false
        :inverted= false
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          v-show="user"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Carneiro FC
         <!-- <div slot="subtitle">Running on Quasar v{{ $q.version }}</div> -->
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      v-if="user"
    >

      <q-list
        no-border
        link
        inset-delimiter
      >

        <profile :photo=user.photoURL />

        <q-list-header>Nome do Jogador</q-list-header>
        <q-item link>
          <q-item-side icon="dashboard"/>
          <router-link to="/">
            <q-item-main label="dashboard" />
          </router-link>
        </q-item>
        <q-item link>
          <q-item-side icon="group"/>
          <router-link to="/parcial">
            <q-item-main label="parciais" />
          </router-link>
        </q-item>
      </q-list>
    <q-btn @click="logout" class="full-width fixed-bottom" label="Logout" color="deep-orange" icon="exit_to_app"></q-btn>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Profile from '../components/profile'
export default {
  name: 'LayoutDefault',
  components: {Profile},
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    logout () {
      this.$auth.signOut().then(() => {
        console.log('Deslogado')
      })
    }
  },
  computed: {
    user () {
      return this.$store.state.users.user
    }
  },
  beforeCreate () {
    this.$auth.onAuthStateChanged(user => {
      if (!user) { this.$router.push({path: 'login'}) }

      this.$store.commit('users/setUser', user)
    })
  },
  mounted () {
  }
}
</script>

<style>
  a {
    text-decoration: none;
    font-weight: bold;
  }

  a:visited, :link {
    color: black;
  }
</style>

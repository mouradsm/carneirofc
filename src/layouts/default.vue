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
    >
    <div id="profile">
        <img :src=user.photoURL class="inline-block">
    </div>
      <q-list
        no-border
        link
        inset-delimiter
      >
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
  <button @click="logout">LOGOUT</button>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
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
      return this.$store.state.users.user || {}
    }
  },
  beforeCreate () {
    this.$auth.onAuthStateChanged(user => {
      if (!user) { this.$router.push({path: 'login'}) }
    })
  },
  mounted () {
    console.log(this.user)
  }
}
</script>

<style>
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

  a {
    text-decoration: none;
    font-weight: bold;
  }

  a:visited, :link {
    color: black;
  }
</style>

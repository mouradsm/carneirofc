<template>
  <q-page padding>
    <!-- content -->
    <div v-for="user in orderedUsers" :key="user.uid">
      <parcial :photoURL=user.photoURL :name=user.name :score=user.score></parcial>
    </div>

  </q-page>
</template>

<script>
import Parcial from '../components/parcial'
import _ from 'lodash'
export default {
  components: {Parcial},
  name: 'PageParcial',
  data () {
    return {
      users: [
        {'name': 'Carneiro',
          'score': '11.00',
          'photoURL': 'assets/nobody_m.original.jpg',
          'uid': 'aijfposiFJKMFsodiajdoa'
        },
        {'name': 'Moura',
          'score': '20.00',
          'photoURL': 'assets/nobody_m.original.jpg',
          'uid': 'zxQuifuh98u4spdofk3l'
        },
        {'name': 'Jordão',
          'score': '18.00',
          'photoURL': 'assets/nobody_m.original.jpg',
          'uid': '319823u1923oijsdpoijso'
        }
      ]
    }
  },
  computed: {
    orderedUsers () {
      return _.orderBy(this.users, 'score', 'desc')
    }
  }

}
</script>

<style>
</style>

<template>
    <q-card inline style="width: 100%">
      <q-card-main>
        <div>
          <img :src=photoURL>
          <span class="nome">{{name}}</span>
          <span class="pontos">{{score}}</span>
        </div>
      </q-card-main>
    </q-card>
</template>

<script>
export default {
  name: 'parcial',
  props: ['name', 'score', 'photoURL'],
  data () {
    return {}
  }
}
</script>

<style>
  img {
    width: 4em;
    float: left;
  }
  .nome {
    font-weight: bold;
    font-size: 15px;
    float: left;
    padding-top:1.5em;
    padding-left: 1.2em;
  }
  .pontos {
    font-weight: bold;
    color: green;
    float: right;
    padding-top:1.5em;
    padding-right: 1.2em;
  }
  .q-card-main {
    margin:0;
    padding: 0;
  }
  .q-card {
    margin-bottom: 15px;
  }
</style>

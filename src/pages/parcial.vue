<template>
  <q-page padding>
    <!-- content -->
  <q-card inline style="width: 100%">
    <q-card-main>
      <div>
        <img src="~assets/nobody_m.original.jpg">
        <span class="nome">Carneiro</span>
        <span class="pontos">15.00</span>
      </div>
    </q-card-main>
  </q-card>
  <q-card inline style="width: 100%">
    <q-card-main>
      <div>
        <img src="~assets/nobody_m.original.jpg">
        <span class="nome">Jacó</span>
        <span class="pontos">14.00</span>
      </div>
    </q-card-main>
  </q-card>
  <q-card inline style="width: 100%">
    <q-card-main>
      <div>
        <img src="~assets/nobody_m.original.jpg">
        <span class="nome">João</span>
        <span class="pontos">13.00</span>
      </div>
    </q-card-main>
  </q-card>
  <q-card inline style="width: 100%">
    <q-card-main>
      <div>
        <img src="~assets/nobody_m.original.jpg">
        <span class="nome">Pedro</span>
        <span class="pontos">12.00</span>
      </div>
    </q-card-main>
  </q-card>
  <q-card inline style="width: 100%">
    <q-card-main>
      <div>
        <img src="~assets/nobody_m.original.jpg">
        <span class="nome">Goku</span>
        <span class="pontos">11.00</span>
      </div>
    </q-card-main>
  </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageParcial'
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

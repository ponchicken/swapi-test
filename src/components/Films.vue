<template>
  <div class="films">
    <Film v-for="(film, i) in films" :film="film" :key="i"/>
  </div>
</template>


<script>
import Film from './Film'

export default {
  components: { Film },
  props: ['films']
}
</script>
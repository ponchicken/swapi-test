<template>
  <div class="people">
    <div class="human" v-for="(human, i) in people" :human="human" :key="i">
      <div>{{ human.name }}</div>
    </div>
  </div>
</template>


<script>

export default {
  computed: {
    people () {
      return this.$store.state.people
    }
  },
}
</script>
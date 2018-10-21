<template>
  <div class="persons">
    <div class="controls">
      <button @click="onPrev" v-if="isPrevExist">prev</button>
      <button @click="onClick">{{ status }}</button>
      <button @click="onNext" v-if="isNextExist">next</button>
    </div>
    <People />
  </div>
</template>

<script>
// @ is an alias to /src
import People from '@/components/People'
// import { mapActions } from 'vuex'

export default {
  name: 'Persons',
  components: {
    People
  },
  computed: {
    status () {
      return this.$store.state.status
    },
    isPrevExist () {
      return Boolean(this.$store.state.peopleData.previous)
    },
    isNextExist () {
      return Boolean(this.$store.state.peopleData.next)
    }
  },
  methods: {
    onClick: function (e) {
      console.log(e.target)
      e.target.disabled = true
      this.$store.dispatch(
        'loadPeople'
      )
    },
    onPrev: function () {
      this.$store.dispatch(
        'loadPeople', 
        { url: this.$store.state.peopleData.previous} 
      )
    },
    onNext: function () {
      this.$store.dispatch(
        'loadPeople', 
        { url: this.$store.state.peopleData.next} 
      )
    },
  }
}
</script>

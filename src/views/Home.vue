<template>
  <div class="home">
    <div class="controls">
      <button @click="onClick">{{ status }}</button>
      <input type="text" placeholder="search title"  v-model="search" @keyup="onSearchChange">
    </div>
    <Films :films="filteredFilms"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Films from '@/components/Films'
import Mixins from '@/mixins'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  mixins: [Mixins],
  data: function () {
    return {
      search: '',
      filtered: null
    }
  },
  components: {
    Films
  },
  computed: {
    status () {
      return this.$store.state.status
    },
    films () {
      return this.$store.state.films
    },
    filteredFilms () {
      return this.filtered || this.films
    }
  },
  methods: {
    ...mapActions({
      onClick: 'loadFilms' 
    }),
    onSearchChange: function (e) {
      this.filtered = this.films.filter(film => {
        return this.clearStr(film.title).includes(this.clearStr(e.target.value))
      })
    }
  }
}
</script>

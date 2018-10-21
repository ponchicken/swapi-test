<template>
  <div class="film">
    <h3>{{ film.title }}</h3>
    <div class="desc">
      {{ film.opening_crawl | truncate(150) }}
    </div>
  </div>
</template>


<script>
  export default {
    props:['film']
  }
</script>
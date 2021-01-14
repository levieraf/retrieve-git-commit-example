<template>
  <div class="container">
    <MyHeader />
    <MyCommits />
  </div>
</template>

<script>
import MyHeader from './MyHeader.vue'
import MyCommits from './MyCommits.vue'

export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('fetchRepoInfo').then(() => {
      this.$store.dispatch('fetchCommitsFromRepo');
    });
  },
  components: {
    MyHeader,
    MyCommits
  }
};
</script>

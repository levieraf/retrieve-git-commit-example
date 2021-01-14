<template>
  <div class="pr-5 pl-5 pt-1">
    <div v-for="commitItem in commitsFromRepoList" :key="commitItem.node_id">
      <strong>{{ commitItem.commitMessage }}</strong>

      <div>
        <img
          height="30"
          width="30"
          :alt="commitItem.commitAutor"
          :src="commitItem.commiterAvatar"
          class="rounded-circle"
        />

        <span class="ml-1">{{ commitItem.commitAutor }}</span>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MyCommits',
  computed: {
    ...mapGetters({
      commitsFromRepoList: 'getCommitsFromRepo',
    }),
  },
};
</script>

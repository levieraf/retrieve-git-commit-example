<template>
  <div class="p-5">
    <div class="d-flex align-items-center">
      <img
        class="profile-avatar rounded-circle"
        v-bind:src="repoInfo.ownerAvatarUrl"
      />
      <div class="pl-2">
        <h5>Usuario: {{ repoInfo.ownerLogin }}</h5>
        <h6>Repositorio: {{ repoInfo.name }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MyHeader',
  computed: {
    ...mapGetters({
      repoInfo: 'getRepoInfo',
    }),
  },
};
</script>

<style scoped>
.profile-avatar {
  width: 100px;
}
</style>

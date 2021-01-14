import Vue from 'vue';
import Vuex from 'vuex';
// import * as mockData from '../mockData/data';
import * as Settings from '../config/settings';

import CommitModel from '../models/CommitModel';
import InfoRepoModel from '../models/InfoRepoModel';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repoInfo: new InfoRepoModel(),
    commitsFromRepo: [],
  },
  getters: {
    getRepoInfo(state) {
      return state.repoInfo;
    },
    getCommitsFromRepo(state) {
      return state.commitsFromRepo;
    },
  },
  mutations: {
    setRepoInfo(state, result) {
      state.repoInfo = new InfoRepoModel(result);
    },
    setCommitsFromRepo(state, items) {
      let commits = [];

      items.forEach((item) => {
        commits.push(new CommitModel(item));
      });

      state.commitsFromRepo = commits;
    },
  },
  actions: {
    fetchRepoInfo({ commit }) {
      return new Promise((resolve) => {
        // mockData.getRepoInfo().then((response) => {
        //   commit('setRepoInfo', response);
        //   resolve();
        // });

        Vue.http.get(Settings.repoURL).then((response) => {
          commit('setRepoInfo', response.body);
          resolve();
        });
      });
    },
    fetchCommitsFromRepo({ commit }) {
      return new Promise((resolve) => {
        // mockData.getCommitsFromRepo().then((response) => {
        //   commit('setCommitsFromRepo', response);
        //   resolve();
        // });

        Vue.http.get(Settings.commitsURL).then((response) => {
          commit('setCommitsFromRepo', response.body);
          resolve();
        });
      });
    },
  },
});

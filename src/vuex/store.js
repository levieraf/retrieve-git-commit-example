import Vue from 'vue';
import Vuex from 'vuex';
import * as mockData from '../mockData/data';

import CommitModel from '../models/CommitModel';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repoInfo: {
      name: '',
      owner: {
        login: '',
        avatar_url: '',
      },
    },
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
    setRepoInfo(state, data) {
      state.repoInfo = data;
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
        mockData.getRepoInfo().then((response) => {
          commit('setRepoInfo', response);
          resolve();
        });
      });
    },
    fetchCommitsFromRepo({ commit }) {
      return new Promise((resolve) => {
        mockData.getCommitsFromRepo().then((response) => {
          commit('setCommitsFromRepo', response);
          resolve();
        });
      });
    },
  },
});
